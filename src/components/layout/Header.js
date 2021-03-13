import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import { useNavigation,useRoute,CommonActions } from '@react-navigation/native';

export default function Header() {
    // const direction = I18n.locale === 'ar' ? 'row-reverse' : 'row';
    const navigation = useNavigation(); 
    const route = useRoute().name;

    return (
        <View style={Presets.headerContainer}>
            {route !== 'Home' ? (
                <TouchableOpacity
                    style={{
                        // flexDirection: direction, 
                        }}
                    onPress={() => navigation.goBack()}
                    >
                    <Icon
                        style={{padding: 20}}
                        name={'chevron-left'}
                        size={30}
                        color={colors.grayLink}
                    />
                </TouchableOpacity>
            ):(
                <TouchableOpacity
                    style={{
                        padding: 30 
                        }}
                    >
                </TouchableOpacity>
            )
            }
            <View style={Presets.logHeadar}>
                        <Image 
                            style={Presets.log}
                            source={require('../../assest/img/logo/8.png')}/>
             </View>
            <TouchableOpacity
                // onPress={() => Actions.pop()}
                >
                <Icon
                    style={{padding: 20}}
                    name={'bell-o'}
                    size={25}
                    color={colors.grayLink}
                />
            </TouchableOpacity>
        </View>
    );
}
