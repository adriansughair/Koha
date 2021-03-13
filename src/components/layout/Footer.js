import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {useRoute,useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function Footer() {

    const [currentScene, setcurrentScene] = useState('');
    const navigation = useNavigation();
    const user = useSelector((state) => state.user);

    const route = useRoute().name;
    if(currentScene == ''){
        setcurrentScene(route)
    }

    // console.log(user);

    const handleRoute = (name,navigation) => {
        // if (name != useRoute().name) {
            navigation.navigate(name);
            // navigation.replace('', { screen: name});
        // }
    };


    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => handleRoute('Home',navigation)}>
                <Icon
                    name="home"
                    size={25}
                    color={
                        currentScene == 'Home' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => (user.loggedIn && user.user.roles == 'user') ? handleRoute('AdminMessage',navigation):handleRoute('Login',navigation)}>
                  <Icon
                    name="envelope-o"
                    size={25}
                    color={
                        currentScene == 'AdminMessage' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            {user.loggedIn ?
            <TouchableOpacity 
            onPress={() =>  user.user.roles == 'user' ? handleRoute('AddAdvertise',navigation):handleRoute('AddOffer',navigation)}
            >
                <Icon 
                    name="plus-square-o" 
                    size={25} 
                    color={
                        currentScene == 'AddAdvertise' ? colors.default : '#DAD7E0'
                    } 
                    />
            </TouchableOpacity>
            :
            <TouchableOpacity 
                onPress={() => handleRoute('Login',navigation)}
                >
                    <Icon 
                        name="plus-square-o" 
                        size={25} 
                        color={
                            currentScene == 'AddAdvertise' ? colors.default : '#DAD7E0'
                        } 
                        />
            </TouchableOpacity>
            }
            {!user.loggedIn && (
                <TouchableOpacity 
                    onPress={() => handleRoute('Login',navigation)}
                    >
                        <Icon
                        name="sign-in"
                        size={25}
                        color={
                            currentScene == 'Login' ? colors.default : '#DAD7E0'
                        }
                    />
                </TouchableOpacity>
            )}
            {user.loggedIn && (
                <TouchableOpacity onPress={() => handleRoute('Profile',navigation)}>
                    <Icon
                        name="user-o"
                        size={25}
                        color={
                            currentScene == 'Profile' ? colors.default : '#DAD7E0'
                        }
                    />
                </TouchableOpacity>
            )}
            <TouchableOpacity
                style={{
                    // flexDirection: direction, 
                    }}
                onPress={() => navigation.openDrawer()}
                >
                <Icon
                    name={'align-justify'}
                    size={20}
                    color={
                        currentScene == 'Profile' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 15,
        paddingTop: 15,
        alignItems: 'flex-end',
        backgroundColor:'rgba(255, 255, 255, 0.9)'
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 5,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});