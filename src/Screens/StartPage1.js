import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors';
import I18n from '../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function StartPage1({navigation}) {
  


    return (
            <ImageBackground
            style={{
                width:width*1,
                height:height*1,
                alignItems:'center',
            }}
            source={require('../assest/img/page1.png')}
            >
             <TouchableOpacity
                 style={Presets.Startbutton}
                 onPress={() => navigation.navigate('StartPage2')}>
                    <Text style={Presets.login}>
                        Next
                    </Text>
            
             </TouchableOpacity>
            </ImageBackground> 
    );
}
