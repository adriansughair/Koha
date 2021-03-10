import React from 'react';
import {SafeAreaView,View,StyleSheet,Image,Text,Linking,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import {Presets} from '../styles';
import colors from '../styles/colors';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import {useDispatch,useSelector} from 'react-redux';
import {setStorageItem} from '../providers/provider';
import I18n from '../I18n';
import RNRestart from 'react-native-restart';
import {logout, removeAppData} from '../actions/index';
import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('window').height;

function Menu (props) {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
        await setStorageItem('user', null).then(() => {
        dispatch(removeAppData())
        dispatch(logout());
        RNRestart.Restart();
    });
  };  

return (
      <ImageBackground
              source={require('../assest/img/BackGround.png')}
              style={{width:"100%",height:height*1,alignItems:'center'}}
          >
          <SafeAreaView style={{height:height*0.86,width:"80%"}}>
            <Image 
                  style={styles.sideMenuProfileIcon}
                  source={require('../assest/img/logo/8.png')}/>
            <DrawerContentScrollView {...props}>
                  <View style={styles.customItem}></View>
                  <DrawerItemList {...props} />
            </DrawerContentScrollView>
            {user.loggedIn && (
            <TouchableOpacity
                      style={Presets.logout}
                      onPress={() => handleLogout()}>
                      <Icon name="sign-out" color={colors.default} size={25} />
                      <Text style={{fontSize:16,color: colors.default}}>
                          {I18n.t('logout')}
                      </Text>
            </TouchableOpacity>
            )}
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: 'grey'
              }}>
              Koha App
            </Text>
          </SafeAreaView>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop:40,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    marginBottom:20,
    marginTop:20,
    borderBottomColor:colors.default,
    borderBottomWidth:1,
  },
});

export default Menu;