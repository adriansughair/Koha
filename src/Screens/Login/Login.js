import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../actions';
import {post, setStorageItem} from '../../providers/provider';
import {loginRoute} from '../../providers/routes';

const Login = ({props}) => {

    const [navigation, setnavigation] = useState(props.navigation);
    const [ isLoading, setLoad]= useState(false)
    const height = Dimensions.get('window').height;

    const [data, setData] = useState({
        phone: null,
        password: null,
    });

    const handleSubmit = () => {
        props.handleSubmit(data)
    };


    return (
    <ScrollView>
        <ImageBackground
        source={require('../../assest/img/BackGround.png')}
        style={{width:"100%",height:height*1}}
        >
           <KeyboardAvoidingView 
             behavior={Platform.OS === "ios" ? "position":"padding"}
            //  keyboardVerticalOffset={10}
             >

                    <View style={Presets.LoginContainer}>
                            <View style={Presets.logContainer}>
                            <Image 
                                    style={Presets.log}
                                    source={require('../../assest/img/logo/8.png')}/>
                            </View>
                            <View style={Presets.HeadarText}>
                                <Text style={Presets.textHedar}> 
                                {I18n.t('sign_in')}
                                </Text>
                                <Text style={Presets.loginInfo}> 
                                {I18n.t('loginInfo')}
                                </Text>
                            </View>
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
                            <TouchableOpacity
                                style={Presets.Forget_password_View}
                                onPress={() => navigation.navigate('ForgetPassword')}
                                >
                                <Text style={Presets.Forget_password}>
                                {I18n.t('Forget_password')}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Presets.Loginbutton}
                                onPress={() => handleSubmit()}>
                                {isLoading ? <Loading color={colors.white} /> : <Text style={Presets.login}>{I18n.t('sign_in')}</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Presets.ToRegister}
                                onPress={() => navigation.navigate('Register')}>
                                <Text style={Presets.RegisterLink}>
                                {I18n.t('RegisterLink')}
                                <Text style={Presets.RegisterText}>  {I18n.t('Register')}</Text>
                            </Text>
                            </TouchableOpacity>
                    </View>
                 </KeyboardAvoidingView>
            </ImageBackground>
        </ScrollView>
    );
}

export default Login;
