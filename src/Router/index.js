import * as React from 'react';
import {Image, View, Text, StyleSheet, SafeAreaView,ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../components/Menu';
import {Presets} from '../styles';
import colors from '../styles/colors';
import I18n from '../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';

import StartPage1 from "../Screens/StartPage1";
import StartPage2 from "../Screens/StartPage2";
import StartPage3 from "../Screens/StartPage3";
import LoginIndex from '../Screens/Login/index';
import RegisterIndex from '../Screens/Register/index';
import ForgetPassword from "../Screens/ForgetPassword";

import HomeIndex from '../Screens/HomeScreen/index';
import ProfileIndex from "../Screens/Profile/index";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import Settings from "../Screens/Settings";
import AdminMessage from "../Screens/MessageToAdmin";
import AppNews from "../Screens/AppNews/index";
// ================== Bid ======================
import UploadIndex from "../Screens/AddOffer/index";
import SearchBiddingIndex from'../Screens/Bidding/Search/';
import ShowBiddingIndex from'../Screens/Bidding/Show/index';
import BidNewsIndex from '../Screens/BidNews/index';

// ================== Advertise ======================
import AddAdvertise from "../Screens/AddAdvertise/index";
import Search from'../Screens/Advertise/Search';
import Show from'../Screens/Advertise/Show';

// ================== Accessories ======================
import SearchAccessories from "../Screens/Accessories/SearchAccessories";
import ShowAccessories from "../Screens/Accessories/ShowAccessories";
import SerachNews from '../Screens/News/SerachNews';

export default function index() {
    const user = useSelector((state) => state.user);
    const firstScreens = useSelector((state) => state.app.show);
    const Stack = createStackNavigator();    
    // console.log(firstScreens);
    
    return (
        <NavigationContainer screenOptions={{ headerShown: false }}>
          <Stack.Navigator>
          {!firstScreens && (
            <Stack.Screen options={{headerShown: false}} name="StartPage1" component={StartPage1} />
            )}
          {!firstScreens && (
            <Stack.Screen options={{headerShown: false}} name="StartPage2" component={StartPage2} />
          )}
          {!firstScreens && (
            <Stack.Screen options={{headerShown: false}} name="StartPage3" component={StartPage3} />
            )}

          <Stack.Screen options={{headerShown: false}} name="App" component={App} />
          
          {/* {!user.loggedIn && ( */}
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginIndex} />
          {/* )} */}
          {!user.loggedIn && (
               <Stack.Screen options={{headerShown: false}} name="ForgetPassword" component={ForgetPassword} />
          )}
          {!user.loggedIn && (
                <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterIndex} />
          )}
          
             </Stack.Navigator> 
        </NavigationContainer>
      );
}

function App() {
  const Drawer = createDrawerNavigator();
  const user = useSelector((state) => state.user);
  
  return (
      <Drawer.Navigator
          drawerContentOptions={{
          activeTintColor:colors.default,
          itemStyle: {marginVertical: 5}}}
          drawerStyle={{
            // height: 550,
            }}
        drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerLabel: () => null
          }} 
          name="Home" 
          component={HomeIndex} 
      />
      {user.loggedIn && ( 
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="user" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('Profile')  
          }} 
          name="Profile" 
          component={ProfileIndex} 
      />
      )}
      {user.loggedIn && (
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="envelope" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('Message_Admin') 
          }} 
          name="AdminMessage" 
          component={AdminMessage} 
      />
      )}
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="phone-square" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('Contact_Us') 
          }} 
          name="Contact" 
          component={Contact} 
      />
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="info-circle" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('About') 
          }} 
          name="About" 
          component={About} 
      /> 
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="lock" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('Privacy_Policy') 
          }} 
          name="PrivacyPolicy" 
          component={PrivacyPolicy} 
      /> 
      <Drawer.Screen 
          options={{
            headerShown: false,
            drawerIcon: () => (<Icon name="cog" size={22} color={colors.default}/>),
            drawerLabel: I18n.t('Settings') 
          }} 
          name="Settings" 
          component={Settings} 
      />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="AddOffer" component={UploadIndex} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="AddAdvertise" component={AddAdvertise} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="Search" component={Search} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="Show" component={Show} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="SearchAccessories" component={SearchAccessories} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="ShowAccessories" component={ShowAccessories} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="ShowBidding" component={ShowBiddingIndex} />
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="SearchBidding" component={SearchBiddingIndex} />      
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="BidNews" component={BidNewsIndex} />      
      <Drawer.Screen options={{headerShown: false,drawerLabel: () => null}} name="AppNews" component={AppNews} />
      <Drawer.Screen options={{headerShown : false, drawerLabel: () => null}} name="SerachNews"  component={SerachNews} />
            
      </Drawer.Navigator>
  );
}
