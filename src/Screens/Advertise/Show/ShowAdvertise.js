import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import {basedomain} from '../../../providers/routes';

const height = Dimensions.get('window').height;

export default function ShowBidding({props}) {
    const [data, setData] = useState(props.data);

    return (
            <View style={Presets.HomeScreen}>
                  <View style={Presets.profileImageView2}>
                      <Image 
                             style={Presets.profileImage}
                            //  source={require('../../../assest/img/falcons.jpg')}
                             source={{uri:basedomain + data.image}}
                             />
                  </View>
                   <View style={Presets.OfferView}>
                            <View style={Presets.AboutHead}>
                                <View>
                                    <Text style={Presets.OfferHeadText}>
                                        {data.name}
                                    </Text>
                                </View>
                                <View style={Presets.Contact}>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../../assest/img/icons2/whatsapp.png')}
                                         />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../../assest/img/icons2/telephone.png')}
                                         />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../../assest/img/icons2/Message.png')}
                                         />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                    <Text style={Presets.price2} >{data.price} QAR</Text>                        
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between',margin:5}}>
                                <View style={Presets.InfoLoc3}>
                                            <Icon name="map-marker" size={30} color={colors.default}/>
                                            <Text style={Presets.TextLoc3}>  {data.location}</Text>
                                </View>
                                <View style={Presets.InfoLoc3}>
                                    <Icon name="eye" size={30} color={colors.default}/>
                                    <Text style={Presets.TextLoc3}>  {data.seen}</Text>
                                </View>
                            </View>
                            <View style={Presets.About}>
                                <Text style={Presets.Detail}>
                                    {I18n.t('Detail')}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between',width:'75%',margin:5}}>
                                <View>
                                    <Text style={Presets.DetailHead}>{I18n.t('Age')}</Text>
                                    <Text style={Presets.DetailVal} >{I18n.t(data.Age)}</Text>
                                </View>
                                <View>
                                    <Text style={Presets.DetailHead}>{I18n.t('Type_Falcon')}</Text>
                                    <Text style={Presets.DetailVal} >{data.type}</Text>
                                </View>
                            </View>
                            <View style={{margin:5,height:100}}>
                                <ScrollView style={{flex : 1}}>
                                    <Text>
                                        {data.Description}
                                    </Text>
                                </ScrollView>
                            </View>
                    </View>
            </View>
       );
}
