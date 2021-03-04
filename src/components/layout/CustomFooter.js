import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {useRoute,useNavigation} from '@react-navigation/native';

export default function CustomFooter() {

    const [currentScene, setcurrentScene] = useState('');

    const route = useRoute().name;
    const navigation = useNavigation(); 

    if(currentScene == ''){
        setcurrentScene(route)
    }


    const handleRoute = (name,navigation) => {
        // if (name != useRoute().name) {
            navigation.navigate(name);
        // }
    };


    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footeritem} onPress={() => handleRoute('Home',navigation)}>
                <Icon
                    name="sort-amount-desc"
                    size={25}
                    color={
                        currentScene == 'Home' ? colors.default : '#755734'
                    }
                />
                <Text>Sort By</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footeritem} onPress={() => handleRoute('AdminMessage',navigation)}>
                  <Icon
                    name="filter"
                    size={25}
                    color={
                        currentScene == 'AdminMessage' ? colors.default : '#755734'
                    }
                />
                <Text>Filter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 15,
        alignItems: 'flex-end',
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
    footeritem:{
        flexDirection: 'row',
        width:'25%',
        justifyContent: 'space-around',
    }
});