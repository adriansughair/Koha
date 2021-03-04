import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BidData,AddBid} from '../../providers/routes';
import {get,post} from '../../providers/provider';
import Loading from '../../components/Loading'


import UploadMessage from './Model'
import UploadAdvertise from './Upload'

const height = Dimensions.get('window').height;

export default function AddAdvertiseIndex({navigation}) {

    const dispatch = useDispatch();
    const [status, setStatus] = useState('loading');

    const [data, setData] = useState({});

    const [show, setShow] = useState(false);

    const Done = () => {
        setShow(false);
    };

    useEffect(() => {
        getData();
    }, [])
    
    const handleResponse = (response, json) => {
        switch (response.status) {
            case 200:
                setData(json.data);
                setStatus('start');
                break;
                default:
                setStatus('loading');
        }
    }
    
    const getData = async () =>{
        
        const options = {route: BidData};
        
        const response = await get(options);
        await response.json().then(
            (json) => handleResponse(response, json),
            (err) => console.log('err : ', err),
            );
        }

        const validate = (data) => {
            if (data.name == null || data.name == '') {
                alert(I18n.t('full_name') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.phone == null || data.phone == '') {
                alert(I18n.t('phone_number') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.password == null || data.password == '') {
                alert(I18n.t('password') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.password !== data.confirmPassword ) {
                alert(I18n.t('password') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.password.length < 8) {
                alert(I18n.t('password_must_be_at_least_8_characters'));
                return false;
            }
            return true;
        };
    
    
        const handleSubmit = async (data) => {
            // const valid = validate(data);
            setStatus('loading');
            // if (valid) {
                const optoins = {
                    route: AddBid,
                    body: data,
                };
                const response = await post(optoins);
                await response.json().then((json) => {
                    console.log('===========json===============');
                    console.log(json);
                    console.log('============response==============');
                    console.log(response);
                    console.log('==========================');
                    if (response.status==200 ) {
                        setStatus('success');
                    } else {
                       alert('Please try again, you have issue')
                       setStatus('start');
                    }
                });
            // }
        };


    const renderTemplate = () => {
        switch (status) {
            case 'loading':
                return <Loading color={colors.default} />;
            case 'start':
                const props = {
                    handleSubmit: (data) => handleSubmit(data),
                    data:data
                };
                return <UploadAdvertise props={props} />;
            
            case 'success':
                const props2 = {show: true,navigation:navigation,getData:()=>getData()};
                return <UploadMessage props={props2}/>}
        }

        return <Layout>{renderTemplate()}</Layout>;


}
