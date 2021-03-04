import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import { Presets, Colors, sizing } from '../styles';

import I18n from '../I18n';
import RNRestart from 'react-native-restart';
// import Loading from '../../components/Loading';
import { setStorageItem, getStorageItem } from '../providers/provider';
import Layout from '../components/layout/Layout';
import SplashScreen from 'react-native-splash-screen';

export default function Settings() {
  const [isNew, setIsNew] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [storageLanguage, setStorageLanguage] = useState(null);
  const [status, setStatus] = useState('loading');
  const height = Dimensions.get('window').height;
  const setLanguage = async () => {
    if (isNew || storageLanguage != selectedValue) {
      await setStorageItem('default_lang', selectedValue);
      I18n.locale = selectedValue;
      if (selectedValue === 'ar') {
        I18nManager.forceRTL(true);
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      console.log('storageLanguage');
      console.log(storageLanguage);
      console.log('selectedValue');
      console.log(selectedValue);

    //   SplashScreen.show();
      RNRestart.Restart();
    }
  };

  useEffect(() => {
    SplashScreen.hide()
    async function initSettings() {
      const locale = await getStorageItem('default_lang');
      if (locale) {
        setStorageLanguage(locale);
        setSelectedValue(locale);
        setIsNew(false);
      } else {
        console.log('I18n.locale');
        console.log(I18n.locale);
        setSelectedValue(I18n.locale.substring(0, 2));
        I18n.locale = I18n.locale.substring(0, 2);

        setIsNew(true);
      }
      setStatus('success');
    }
    initSettings();
  }, []);

//   return status === 'success' ? (
return(
  <ImageBackground
  source={require('../assest/img/BackGround.png')}
  style={{width:"100%",height:height*1,alignItems:'center',justifyContent:'center'}}
  >
      <View style={{backgroundColor: "#fff"}}>
        <Text style={styles.text2}>{I18n.t('please_select_a_language')}</Text>
        <View style={[Presets.spaceAround, Presets.container, {width: '70%',alignItems:'center'}]}>
          <TouchableOpacity onPress={() => setSelectedValue('ar')}>
            <Text style={selectedValue == 'ar' && {backgroundColor: Colors.summer_sky,margin:15}}>العربية</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedValue('en')}>
            <Text style={selectedValue == 'en' && {backgroundColor: Colors.summer_sky,margin:15}}>English</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0}
          style={styles.button}
          onPress={setLanguage}>
          <Text style={styles.text}>{I18n.t('apply')}</Text>
        </TouchableOpacity>
      </View>
  </ImageBackground>
//   ) : (
//       <Loading />
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 15,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  text2: {
    color: Colors.river_bed,
    fontWeight: 'bold',
    fontSize:20,

  },
  picker: {
    color: Colors.white,
    height: 80,
    width: 200,
  }
});