import React from 'react';
import {SafeAreaView,View,StyleSheet,Image,Text,Linking,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setStorageItem} from '../providers/provider';
import RNRestart from 'react-native-restart';

const handleLogout = async () => {
    const dispatch = useDispatch();
        await setStorageItem('user', null).then(() => {
        dispatch(removeAppData())
        dispatch(logout());
        RNRestart.Restart();
    });
  };  



export default handleLogout;