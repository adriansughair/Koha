import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors';
import I18n from '../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popup from 'react-native-pop'

const height = Dimensions.get('window').height;

export default function PrivacyPolicy({navigation}) {

    return (
        <Layout>
            <View style={{alignItems:"center",flex:1}}>
                  <View style={Presets.HeaderPage}>
                      <Text style={Presets.HeaderText} >
                            Privacy & Policy
                      </Text>
                  </View>
                   <View style={[Presets.Show,{height:height*0.5}]}>
                         
                    </View>
            </View>
        </Layout>
            
    );
}
