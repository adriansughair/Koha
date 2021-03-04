import React, {useState} from 'react';
import {TouchableOpacity, View, Text,Linking,Dimensions,Modal} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShowModal({props}) {
    const [data, setData] = useState({
        name: null,
        phone_number: null,
        password: null,
    });

    const [show, setShow] = useState(props.show);
    const handleSubmit = () => {
            setShow(true);
    };

    const Done = () => {
        setShow(false);
        props.navigation.navigate('App')

    };

    return(
    <Modal transparent={true}
        visible={show} >
            <View style={{backgroundColor:"#000000aa",flex:1}} >
                <View style={{
                    backgroundColor:colors.white,
                    height:"65%",
                    marginTop:"20%",
                    marginLeft:15,
                    marginRight:15,
                    alignItems:"center",
                    padding:10,
                    borderRadius:25,
                    }}> 
                        <View style={Presets.PopupTitel}>
                                             <Text style={Presets.PopupTitelText}>
                                             Registration
                                             </Text>
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                             <Text 
                                                 style={Presets.AlertText}
                                                 >
                                                Your Account has been created
                                            </Text>
                                            <Text 
                                                 style={Presets.AlertText}
                                                 >
                                                the account will be published once be reviewed by the admin
                                            </Text>
                                            <TouchableOpacity 
                                                onPress={() => Linking.openURL(`whatsapp://send?phone=962790699127`,)}
                                                style={{ 
                                                        //   borderRadius:50,
                                                        //   borderColor:colors.orange,
                                                        //   borderWidth:2,
                                                          paddingRight:25 ,
                                                          paddingLeft:25 ,
                                                          padding:7
                                                          }}>
                                                <Icon
                                                    name="whatsapp"
                                                    size={55}
                                                    color={colors.success}
                                                    />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity 
                                                style={Presets.PopupButtom}
                                                onPress={() => Done()}
                                                >
                                            <Text style={Presets.PopupText}>
                                                OK
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
    </Modal>
    )
}
