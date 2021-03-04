import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image} from 'react-native';
import {FinishedBids} from '../../providers/routes';
import {get} from '../../providers/provider';
import colors from '../../styles/colors'
import Loading from '../../components/Loading'
import Layout from '../../components/layout/Layout';
import BidNews from './BidNews';

export default function BidNewsIndex({navigation}) {
    
    const height = Dimensions.get('window').height;
    const [ isLoading, setLoad]= useState(false)
    const [data, setData] = useState({});
    const [status, setStatus] = useState('loading');
    
    useEffect(() => {
        getData();
    }, [])
    
    const handleResponse = (response, json) => {
        console.log(json);
        switch (response.status) {
            case 200:
                setData(json.data);
                setStatus('success');
                break;
                default:
                    setStatus('loading');
        }
    }
    
    const getData = async () =>{
        
        const options = {route: FinishedBids};
        const response = await get(options);
        await response.json().then(
            (json) => handleResponse(response, json),
            (err) => console.log('err : ', err),
            );
        }
        
        const renderTemplate = () => {
            switch (status) {
                case 'loading':
                    return <Loading color={colors.default} />;
                
                case 'success':
                    const props = {
                        data: data,
                        navigation: navigation
                    };
                    return <BidNews props={props} />;
            }
        }
            return <Layout>{renderTemplate()}</Layout>;
    
    }
