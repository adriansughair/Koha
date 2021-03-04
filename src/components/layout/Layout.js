import React, {useState, useEffect} from 'react';
import {View, StatusBar, SafeAreaView,ScrollView} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import CustomFooter from './CustomFooter';
import {Presets} from '../../styles';
import {useRoute} from '@react-navigation/native';

export default function Layout({children}) {

    const [currentScene, setcurrentScene] = useState('');
    const route = useRoute().name;

    if(currentScene == ''){
        setcurrentScene(route)
    }

    if(currentScene == 'Search'|| currentScene == 'SearchAccessories' || currentScene == 'SearchBidding') {
        return (
            <SafeAreaView>
                <View style={Presets.fullScreen}>
                    <StatusBar hidden={true} />
                    {currentScene !== 'UploadPet' &&
                        <Header />
                    }
                        {/* <ScrollView> */}
                            <View>{children}</View>
                        {/* </ScrollView> */}
                </View>
            </SafeAreaView>
        );
    }else{
        return (
            <SafeAreaView>
                <View style={Presets.fullScreen}>
                    <StatusBar hidden={true} />
                    {currentScene !== 'UploadPet' &&
                        <Header />
                    }
                        <ScrollView>
                            <View>{children}</View>
                        </ScrollView>
                    <Footer />
                </View>
            </SafeAreaView>
        );
    }
}
