import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions,Modal} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.development';
import CheckBox from '@react-native-community/checkbox';
export default function Register({props}) {
    const [data, setData] = useState({
        name: null,
        phone: null,
        password: null,
        confirmPassword: null,
        email:null,
        isSelected: null,
    });

    const height = Dimensions.get('window').height;
    const [navigation, setNavigation] = useState(props.navigation);

    const handleSubmit = () => {
            // setShow({show:true});
            props.handleSubmit(data);
    };


    return(
    <ScrollView>
        <ImageBackground
        source={require('../../assest/img/BackGround.png')}
        style={{width:"100%",height:height*1.1}}
        >
            <KeyboardAvoidingView 
             behavior={Platform.OS === "ios" ? "position":"padding"}
             keyboardVerticalOffset={5}
             >
                <View style={Presets.LoginContainer}>
                        <View style={Presets.logContainer}>
                            <Image 
                                    style={Presets.log}
                                    source={require('../../assest/img/logo/8.png')}/>
                        </View>
                        <View style={Presets.HeadarText}>
                            <Text style={Presets.textHedar}>    
                                {I18n.t('Register')}
                            </Text>
                            <Text style={Presets.loginInfo}> 
                                {I18n.t('RegisterInfo')}
                            </Text>
                        </View>
                        <TextInput
                            style={Presets.textInput}
                            onChangeText={(value) =>
                                setData({...data, name: value})
                            }
                            placeholder={I18n.t('name')}
                            value={data.name}
                        />
                        <TextInput
                            style={Presets.textInput}
                            onChangeText={(value) =>
                                setData({...data, email: value})
                            }
                            placeholder={I18n.t('Email')}
                            value={data.email}
                        />
                        <TextInput
                            style={Presets.textInput}
                            onChangeText={(value) =>
                                setData({...data, phone: value})
                            }
                            keyboardType="phone-pad"
                            placeholder={I18n.t('phone_number')}
                            value={data.phone}
                        />
                        <TextInput
                            secureTextEntry
                            style={Presets.textInput}
                            onChangeText={(value) =>
                                setData({...data, password: value})
                            }
                            placeholder={I18n.t('password')}
                            value={data.password}
                        />
                        <TextInput
                            secureTextEntry
                            style={Presets.textInput}
                            onChangeText={(value) =>
                                setData({...data, confirmPassword: value})
                            }
                            placeholder={I18n.t('confirm_password')}
                            value={data.confirmPassword}
                        />
                        <View
                                style={Presets.ToPrivacyPolice}
                                // onPress={() => navigation.navigate('Register')}
                                >
                                <CheckBox
                                    // value={data.isSelected}
                                    // onValueChange={setData({...data, isSelected: true})}
                                />
                                <Text style={Presets.PrivacyPoliceLink}>
                                {I18n.t('privacy_Police_check')}
                                <Text style={Presets.RegisterText}>  {I18n.t('privacy_Police_link')}</Text>
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={Presets.ToRegister}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={Presets.LoginLink}>
                            {I18n.t('i_already_have_an_account')}
                            <Text style={Presets.RegisterText}>  {I18n.t('sign_in')}</Text>
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Presets.Loginbutton}
                            onPress={() => handleSubmit()}>
                            {/* {isLoading ? <Loading color={colors.white} /> :  */}
                            <Text style={Presets.login}>{I18n.t('create_account')}</Text>
                            {/* } */}
                        </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
        </ImageBackground>
    </ScrollView>

    )
}
