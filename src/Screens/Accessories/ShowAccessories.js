// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text,Linking , TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch ,useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popup from 'react-native-pop';
import {post} from '../../providers/provider';
import { AccessorieById , basedomain } from '../../providers/routes';
import { CommonActions } from '@react-navigation/native';



const height = Dimensions.get('window').height;

export default function ShowAccessories({navigation , route}) {
    const dispatch = useDispatch();
    const [ isLoading, setLoad]= useState(false)
    const [show, setShow] = useState(false);
    const [value , setValue] = useState({});
    const [res , setRes] = useState(false);

const { itemId } = route.params;

const getData = async () =>{
    const options = {route: AccessorieById,
         body :{ 
             lang :I18n.locale , 
              id :itemId
            }};        
    const response = await post(options);
    await response.json().then(
        (json) => {
            if(json.data.length != 0){
                setValue(json.data)
                console.log("value is =======================");
                console.log(value)
            }
              setRes(true);
        },
        (err) => console.log('err : ', err),
        );
}        
    useEffect(() => {
        console.log("ids"); 
       console.log(itemId);
        getData();
    }, [itemId]);

    const ShowUpdate = () => {
            setShow(true);
    };

    const Update = () => {
        setShow(false);
    };

    return (
        <Layout>
            <View style={Presets.HomeScreen}>
                  <View style={Presets.profileImageView} >
                      <Image 
                             style={Presets.profileImage}
                             source={{uri:basedomain + value.image}}
                             />
                  </View>
                   <View style={Presets.OfferView}>
                            <View style={Presets.AboutHead}>
                                <View>
                                    <Text style={Presets.OfferHeadText}>
                                            {value.name}
                                    </Text>
                                </View>
                                <View style={Presets.Contact}>
                                    <TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?phone=${value.phone}`)}>
                                        <Image 
                                            style={Presets.ContactImage}
                                            source={require('../../assest/img/icons2/whatsapp.png')}
                                         />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${value.phone}`)}>
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
                                    <Text style={Presets.price2} >{value.price} QAR </Text>                        
                            </View>
                            <View style={Presets.InfoLoc2}>
                                        <Icon name="map-marker" size={15} color={'#DAD7E0'}/>
                                        <Text style={Presets.TextLoc}>
                                            {value.location} (2 km)
                                        </Text>
                            </View>
                            <View style={Presets.About}>
                                <Text style={Presets.Detail}>
                                    {I18n.t('Detail')}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between',width:'75%',margin:5}}>
                                <View>
                                    <Text style={Presets.DetailHead}>{I18n.t('Status')}</Text>
                                    <Text style={Presets.DetailVal}>{I18n.t('new')}</Text> 
                                </View>
                            </View>
                            <View style={{margin:5,height:110}}>
                                <ScrollView style={{flex : 1}}>
                                    <Text>
                                    {value.Description}
                                    </Text>
                                </ScrollView>
                            </View>
                    </View>
            </View>
            {/* </ImageBackground> */}
        </Layout>
            
    );
}
