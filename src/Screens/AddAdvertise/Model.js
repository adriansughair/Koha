import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const height = Dimensions.get('window').height;

export default function UploadMessage({props}) {

    const [show, setShow] = useState(props.show);


    const Done = () => {
        setShow(false);
        // props.navigation.navigate('SearchBidding');
    };

return (
       <Modal transparent={true} visible={show} >
            <View style={{backgroundColor:"#000000aa",flex:1}} >
                <View style={{
                                backgroundColor:colors.white,
                                height:"50%",
                                marginTop:"40%",
                                marginLeft:15,
                                marginRight:15,
                                alignItems:"center",
                                padding:10,
                                borderRadius:25,
                    }}> 
                        <View style={Presets.PopupTitel}>
                                             <Text style={Presets.PopupTitelText}>
                                               {I18n.t('Add_Ads')}
                                             </Text>
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                             <Text 
                                                 style={Presets.AlertText}
                                                >
                                                {I18n.t('Advertise_message')}
                                            </Text>
                                            <View style={{borderRadius:50,
                                                          borderColor:colors.success,
                                                          borderWidth:5,
                                                          padding:10,
                                                        //   paddingRight:25 ,
                                                        //   paddingLeft:25 ,
                                                          }}>
                                                <Icon
                                                    name="check"
                                                    size={40}
                                                    color={colors.success}
                                                />
                                            </View>
                                        </View>
                                        <TouchableOpacity 
                                                style={Presets.PopupButtom}
                                                onPress={() => Done()}
                                        >
                                            <Text style={Presets.PopupText}>
                                              {I18n.t('Ok')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>        
    );
}
