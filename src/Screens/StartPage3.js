import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors';
import I18n from '../I18n';
import {startApp} from '../actions';
import {setStorageItem} from '../providers/provider';
import { useEffect } from 'react/cjs/react.development';
import {useDispatch,useSelector} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function StartPage3({navigation}) {
    
    const dispatch = useDispatch();
    
    const [data, setData] = useState({
            phone_number: null,
            password: null,
    });

    const handelsubmit = async () =>{
        await setStorageItem('App', true);
        dispatch(startApp(false));
    }  


    return (
            <ImageBackground
            style={{
                width:width*1,
                height:height*1,
                alignItems:'center',
            }}
            source={require('../assest/img/page3.png')}
            >
             <TouchableOpacity
                 style={Presets.Startbutton}
                 onPress={() => handelsubmit()}>
                    <Text style={Presets.login}>
                        Next
                    </Text>
            
             </TouchableOpacity>
            </ImageBackground> 
    );
}