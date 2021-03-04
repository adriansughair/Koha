import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popup from 'react-native-pop'

const height = Dimensions.get('window').height;

export default function Profile({props}) {
    const dispatch = useDispatch();
    const [ isLoading, setLoad]= useState(false)
    const [data, setData] = useState(props.data[0]);
    const [show, setShow] = useState(props.show);

    const Update = () => {
        setShow(false);
        props.FinishUpdate(data);
    };

    return (
        <Modal transparent={true}
                                   visible={show} >
                                <View style={{backgroundColor:"#000000aa",flex:1}} >
                                    <View style={{
                                        backgroundColor:colors.white,
                                        height:"70%",
                                        marginTop:"20%",
                                        marginLeft:15,
                                        marginRight:15,
                                        alignItems:"center",
                                        padding:10,
                                        borderRadius:25,
                                        }}> 
                                        <View style={[Presets.PopupTitel,{paddingBottom:0}]}>
                                             <Text style={Presets.PopupTitelText}>
                                                  Edit Your Profile
                                             </Text>
                                             <Icon
                                                name="edit"
                                                size={20}
                                                color={colors.white}
                                                style={{backgroundColor:colors.default,padding:2,borderRadius:5}}
                                            />
                                        </View>
                                        <View style={Presets.PopupInput2}>
                                            <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder="Name"
                                                onChangeText={(value) =>
                                                    setData({...data, name: value})
                                                }
                                                value={data.name}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput2}>
                                             <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder="Phone number"
                                                onChangeText={(value) =>
                                                    setData({...data, phone: value})
                                                }
                                                keyboardType="phone-pad"
                                                value={data.phone}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput2}>
                                            <TextInput
                                                style={Presets.PopupInputText2}
                                                placeholder="Email"
                                                onChangeText={(value) =>
                                                    setData({...data, email: value})
                                                }
                                                value={data.email}
                                                />
                                        </View>
                                        <View style={Presets.PopupInput}>
                                            <TextInput
                                                style={Presets.PopupInputText}
                                                placeholder="About me"
                                                textAlignVertical={'top'}
                                                onChangeText={(value) =>
                                                    setData({...data, about: value})
                                                }
                                                value={data.about}
                                                />
                                        </View>
                                        <TouchableOpacity 
                                                style={Presets.PopupButtom}
                                                onPress={() => Update()}
                                        >
                                            <Text style={Presets.PopupText}>
                                                Update
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
    </Modal>
    );
}
