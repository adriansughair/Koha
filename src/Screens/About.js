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

export default function About({navigation}) {

    return (
        <Layout>
            <View style={{alignItems:"center",flex:1}}>
                  <View style={Presets.HeaderPage}>
                      <Text style={Presets.HeaderText} >
                      {I18n.t('Abouts')}
                      </Text>
                  </View>
                   <View style={Presets.Show}>
                         <Text>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                         </Text>
                    </View>
            </View>
        </Layout>
            
    );
}
