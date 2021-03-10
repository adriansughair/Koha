import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../styles';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors';
import I18n from '../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popup from 'react-native-pop'
import {post,} from '../providers/provider';
import {AdminMeesage} from '../providers/routes';
import {useSelector,useDispatch} from 'react-redux';


const height = Dimensions.get('window').height;

export default function AdminMessage({navigation}) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(useSelector((state) => state.user.user));
    const [data, setData] = useState({
        user_id: user.id,
        message: null
        });


        const validate = () => {
            if (data.message == null || data.message == '') {
                alert(I18n.t('Meassge_is_required'));
                return false;
            }
            return true;
        };
    
    
        const handleSubmit = async () => {
            const valid = validate();
            if (valid) {
                const optoins = {
                    route: AdminMeesage,
                    body: data,
                };
                const response = await post(optoins);
                await response.json().then((json) => {
                    if (response.status == 200) {
                        // setData({
                        //     message:null
                        // })
                        setShow(true);
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
            <ImageBackground
                source={require('../assest/img/BackGround.png')}
                style={{width:"100%",height:height*0.75}}
            >
            <View style={[Presets.fullScreen,{alignItems:"center",flex:1}]}>
                  <View style={Presets.HeaderPage}>
                      <Text style={Presets.HeaderText} >
                          {I18n.t('Message_Admin')}
                      </Text>
                  </View>
                   <View style={Presets.AdminMessage}>
                         <TextInput
                            style={Presets.AdminMessageText}
                            textAlignVertical={'top'}
                            placeholder={I18n.t('Admin_Input_placeholder')}
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
                        <Text style={Presets.PopupText}>{I18n.t('Send')}</Text>
                    </TouchableOpacity>
                    {/* ######################### Alert message ################################ */}
                    <Modal transparent={true}
                                   visible={show} >
                                <View style={{backgroundColor:"#000000aa",flex:1}} >
                                    <View style={{
                                        backgroundColor:colors.white,
                                        height:"60%",
                                        marginTop:"20%",
                                        marginLeft:15,
                                        marginRight:15,
                                        alignItems:"center",
                                        padding:10,
                                        borderRadius:25,

                                        }}> 
                                        <View style={Presets.PopupTitel}>
                                             <Text style={Presets.PopupTitelText}>
                                                  Message!!
                                             </Text>
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                             <Text 
                                                 style={Presets.AlertText}>
                                                Your Message has been sent successfully
                                            </Text>
                                            <View style={{borderRadius:100,
                                                          borderColor:colors.success,
                                                          borderWidth:9,
                                                          padding:7}}>
                                                <Icon
                                                    name="check"
                                                    size={55}
                                                    color={colors.success}
                                                />
                                            </View>
                                        </View>
                                        <TouchableOpacity 
                                                style={Presets.PopupButtom}
                                                onPress={() => setShow(false)}
                                        >
                                            <Text style={Presets.PopupText}>
                                                OK
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </Modal>
                    {/* ######################### Alert message ################################ */}
            </View>
            </ImageBackground>
        </Layout>
            
    );
}
