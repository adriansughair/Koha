import React, {useState,useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import Loading from '../../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import AppNews from "./AppNews";
import {LastBids} from '../../providers/routes';
import {get} from '../../providers/provider';
import Icon from 'react-native-vector-icons/FontAwesome';

const height = Dimensions.get('window').height;

export default function SearchBiddingIndex({navigation,route}) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('loading');
  
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    
    const handleResponse = (response, json) => {
        console.log(json.data);
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
        
        const options = {route: LastBids};
        
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
                case 'start':
                    const props = {
                        handleSubmit: (data) => handleSubmit(data),
                        data:data,
                        navigation:navigation,
                    };
                    return <AppNews props={props}/>;
            }
    
        }
        
    return (<Layout>
                {renderTemplate()}
             </Layout>
           )
};
