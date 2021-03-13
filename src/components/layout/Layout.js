import React, {useState, useEffect} from 'react';
import {ImageBackground,View, StatusBar, SafeAreaView,ScrollView,Dimensions} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import CustomFooter from './CustomFooter';
import {Presets} from '../../styles';
import {useRoute} from '@react-navigation/native';

export default function Layout({children}) {

    const height = Dimensions.get('window').height;
    const [currentScene, setcurrentScene] = useState('');
    const route = useRoute().name;

    if(currentScene == ''){
        setcurrentScene(route)
    }

    if(currentScene == 'Search'|| currentScene == 'SearchAccessories' || currentScene == 'SearchBidding') {
        return (
            <SafeAreaView>
                <ImageBackground
                source={require('../../assest/img/BG2.jpg')}
                style={{width:"100%",height:height*1}}
                    >
                    <View style={Presets.fullScreen}>
                        <StatusBar hidden={true} />
                        {currentScene !== 'UploadPet' &&
                            <Header />
                        }
                        {/* <ScrollView> */}
                            <View>{children}</View>
                        {/* </ScrollView> */}
                </View>
            </ImageBackground>
            </SafeAreaView>
        );
    }else{
        return (
            <SafeAreaView>
            <ImageBackground
            source={require('../../assest/img/BG2.jpg')}
            style={{width:"100%",height:height*1}}
                >
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
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
