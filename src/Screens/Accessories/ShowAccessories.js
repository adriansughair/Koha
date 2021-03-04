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

export default function ShowAccessories({navigation}) {
    const dispatch = useDispatch();
    const [ isLoading, setLoad]= useState(false)
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);

    const ShowUpdate = () => {
            setShow(true);
    };

    const Update = () => {
        setShow(false);
    };

    return (
        <Layout>
            <View style={Presets.HomeScreen}>
                  <View style={Presets.profileImageView}>
                      <Image 
                             style={Presets.profileImage}
                             source={require('../../assest/img/raqe3.jpg')}/>
                  </View>
                   <View style={Presets.OfferView}>
                            <View style={Presets.AboutHead}>
                                <View>
                                    <Text style={Presets.OfferHeadText}>
                                            برقع
                                    </Text>
                                </View>
                                <View style={Presets.Contact}>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../assest/img/icons2/whatsapp.png')}
                                         />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../assest/img/icons2/telephone.png')}
                                         />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../assest/img/icons2/Message.png')}
                                         />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                    <Text style={Presets.price2} >500QAR </Text>                        
                            </View>
                            <View style={Presets.InfoLoc2}>
                                        <Icon name="map-marker" size={15} color={'#DAD7E0'}/>
                                        <Text style={Presets.TextLoc}>
                                            Doha (2 km)
                                        </Text>
                            </View>
                            <View style={Presets.About}>
                                <Text style={Presets.Detail}>
                                    Detail
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between',width:'75%',margin:5}}>
                                <View>
                                    <Text style={Presets.DetailHead}>Status</Text>
                                    <Text style={Presets.DetailVal}>New</Text> 
                                </View>
                            </View>
                            <View style={{margin:5,height:110}}>
                                <ScrollView style={{flex : 1}}>
                                    <Text>
                                    is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                </ScrollView>
                            </View>
                    </View>
            </View>
            {/* </ImageBackground> */}
        </Layout>
            
    );
}
