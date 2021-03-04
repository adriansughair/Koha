import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
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


    const ShowUpdate = () => {
        props.Update();
    };

    return (
            <View style={Presets.HomeScreen}>
                  <View style={Presets.profileImageView}>
                      <Image 
                             style={Presets.profileImage}
                             source={require('../../assest/img/profile.jpg')}/>
                  </View>
                  <View style={Presets.Info}>
                            <View style={Presets.InfoName}>
                                <Text style={Presets.TextName}>
                                    {data.name}
                                </Text>
                            </View>
                            <View style={[Presets.InfoLoc,{paddingTop:10,}]}>
                                <Icon name="map-marker" size={15} color={'#DAD7E0'}/>
                                <Text style={Presets.TextLoc}>
                                     {data.location !==null ? data.location : '  Undefined'}
                                </Text>
                            </View>
                            <View style={[Presets.InfoLoc,{paddingTop:10}]}>
                                <Text style={[Presets.TextLoc,{fontSize:15}]}>
                                     {'+967'+data.phone}
                                </Text>
                            </View>
                   </View>
                   <View style={Presets.AboutView}>
                            <View style={Presets.AboutHead}>
                                <Text style={Presets.AboutHeadText}>
                                        About
                                </Text>
                                <TouchableOpacity onPress={() => ShowUpdate()}>
                                    <Icon
                                        name="edit"
                                        size={20}
                                        color={colors.white}
                                        style={{backgroundColor:colors.default,padding:2,borderRadius:5}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={Presets.About}>
                                <Text 
                                    style={Presets.AboutText}
                                    textAlignVertical={'top'}
                                >
                                    About me
                                </Text>
                            </View>
                    </View>
            </View>
    );
}
