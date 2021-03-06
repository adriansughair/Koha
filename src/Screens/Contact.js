import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors';
import I18n from '../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import {post,} from '../providers/provider';
import {NewContact} from '../providers/routes';

const height = Dimensions.get('window').height;

export default function Contact({navigation}) {

    const [data, setData] = useState({
        name:null,
        email:null,
        subject:null,
        message:null
        });


        const validate = () => {
            if (data.name == null || data.name == '') {
                alert(I18n.t('full_name') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.email == null || data.email == '') {
                alert(I18n.t('phone_number') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.subject == null || data.subject == '') {
                alert(I18n.t('password') + ' ' + I18n.t('is_required'));
                return false;
            }else if (data.message == null || data.message == '') {
                alert(I18n.t('password_must_be_at_least_8_characters'));
                return false;
            }
            return true;
        };
    
    
        const handleSubmit = async () => {
            const valid = validate();
            // setStatus('loading');
            if (valid) {
                const optoins = {
                    route: NewContact,
                    body: data,
                };
                const response = await post(optoins);
                await response.json().then((json) => {
                    if (response.status == 200) {
                        alert(json.message);
                        setData({
                            name:null,
                            email:null,
                            subject:null,
                            message:null
                        })
                    } else {
                        if (json.data.phone) {
                            alert('You have issue, please try again' )
                        }
                    }
                });
            }
        };

    return (
        <Layout>
            
            <View style={{alignItems:"center",flex:1,paddingBottom:20}}>
                  <View style={Presets.HeaderPage}>
                      <Text style={Presets.HeaderText} >
                            {I18n.t('Contact_Us')}
                      </Text>
                  </View>
                   <View style={Presets.ContactForm}>
                                    <View style={{alignItems:'center'}}>
                                        <View style={Presets.PopupInput2}>
                                            <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder={I18n.t('Name')}
                                                onChangeText={(value) =>
                                                    setData({...data, name: value})
                                                }
                                                value={data.name}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput2}>
                                             <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder={I18n.t('Email')}
                                                onChangeText={(value) =>
                                                    setData({...data, email: value})
                                                }
                                                value={data.email}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput2}>
                                            <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder={I18n.t('Subject')}
                                                onChangeText={(value) =>
                                                    setData({...data, subject: value})
                                                }
                                                value={data.subject}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput}>
                                            <TextInput
                                                style={Presets.PopupInputText}
                                                placeholder={I18n.t("About_mes")}
                                                textAlignVertical={'top'}
                                                onChangeText={(value) =>
                                                    setData({...data, message: value})
                                                }
                                                value={data.message}
                                                />
                                        </View>
                                        <TouchableOpacity 
                                                style={Presets.PopupButtom}
                                                onPress={() => handleSubmit()}
                                        >
                                            <Text style={Presets.PopupText}>
                                                {I18n.t('Send')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
            </View>
        </Layout>
            
    );
}
