import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../styles/colors';
import I18n from '../I18n';
import {useDispatch} from 'react-redux';
import {post} from '../providers/provider';
import {ForgotPasswordRoutes} from '../providers/routes';

export default function ForgotPassword({navigation}) {
    const dispatch = useDispatch();

    const [ isLoading, setLoad]= useState(false)
    const height = Dimensions.get('window').height;

    const [data, setData] = useState({
        phone: null,
    });


    const handleResponse = async (response, json) => {
        console.log(response);
        console.log(json);

        switch (response.status) {
            case 200:
                alert("We'll conntact with you");
                navigation.navigate('App');
                break;
            default:
                alert('This phone number is not exist, Please try again');
        }
    };

    const handleSubmit = async () => {
        if (data.phone == null) {
            alert('Please_add_your_phone_number');
        } else {
            optoins = {
                route: ForgotPasswordRoutes,
                body: data,
            };
            const response = await post(optoins);
            await response
                .json()
                .then((json) => handleResponse(response, json));
        }
    };

    return (
        <ImageBackground
          source={require('../assest/img/BackGround.png')}
          style={{width:"100%",height:height*1}}
        >
             <View style={Presets.LoginContainer}>
                    <View style={Presets.logContainer}>
                    {/* <TouchableOpacity>
                        <Icon
                            name="camera"
                            size={65}
                            color={'#DAD7E0'}
                         />
                    </TouchableOpacity> */}
                    <Image 
                            style={Presets.log}
                            source={require('../assest/img/logo/8.png')}/>
                    </View>
                    <View style={Presets.HeadarText}>
                        <Text style={Presets.textHedar}> 
                         Forgot Password
                        </Text>
                        <Text style={Presets.loginInfo}> 
                        Enter Your phone number To reset Your Password
                        </Text>
                    </View>
                    <TextInput
                        style={Presets.textInput}
                        onChangeText={(value) =>
                            setData({...data, phone_number: value})
                        }
                        keyboardType="phone-pad"
                        placeholder={I18n.t('phone_number')}
                        value={data.phone}
                    />
                    <View style={Presets.ForgetText}>
                        <Text style={Presets.loginInfo}> 
                        Enter Your registered phone number and we will send you message link to reset your password
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={Presets.Loginbutton}
                        onPress={() => handleSubmit()}>
                        <Text style={Presets.login}>Submit</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
