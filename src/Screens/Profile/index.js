import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {post,get} from '../../providers/provider';
import {UserUpdate,getProfileRoute} from '../../providers/routes';
import colors from '../../styles/colors'
import Loading from '../../components/Loading'
import Profile from'./Profile';
import ProfileModal from'./ProfileModal';
import Layout from '../../components/layout/Layout';
import I18n from '../../I18n';



export default function ProfileIndex({navigation}) {
    const dispatch = useDispatch();
    const [ isLoading, setLoad]= useState(false)
    const [data, setData] = useState({});
    const [status, setStatus] = useState('loading');
    const [user, setUser] = useState(useSelector((state) => state.user.user));

    useEffect(() => {
        getData();
    },[])

    const handleResponse = (response, json) => {
        console.log(json);
        console.log(response);      
        switch (response.status) {
            case 200:
                setData(json.data);
                setStatus('success');
                break;
            default:
                setStatus('loading');
        }
    }

    const UpdateResponse = (response, json) => {
        switch (response.status) {
            case 200:
                getData();
                break;
            default:
                setStatus('loading');
        }
    }

    const getData = async () =>{
        
        console.log("================");
        console.log(user);
        const options = {
            route: getProfileRoute+"/"+user.phone
        };
        const response = await get(options);
        await response.json().then(
            (json) => handleResponse(response, json),
            (err) => console.log('err : ', err),
        );
    }
    
    const Update = () =>{
        setStatus('Update');
    }

    const FinishUpdate = async (data) =>{
        
        const options = {
            route: UserUpdate,
            body: data,
        };
        const response = await post(options);
        await response.json().then(
            (json) => UpdateResponse(response, json),
            (err) => console.log('err : ', err),
        );
    }

    const renderTemplate = () => {
        switch (status) {
            case 'loading':
                return <Loading color={colors.default} />;
            
            case 'success':
                const props = {
                    Update: () => Update(),
                    data:data,
                };
                return <Profile props={props} />;
            
            case 'Update':
                const props2 = {
                    show: true,
                    data:data,
                    FinishUpdate: (data) => FinishUpdate(data)};
                return <ProfileModal props={props2}/>}
        }

        return <Layout>{renderTemplate()}</Layout>
   
}
