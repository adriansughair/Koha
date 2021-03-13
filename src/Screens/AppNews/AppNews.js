import React, {useState,useEffect} from 'react';
import {Ra,CheckBox,Slider,StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {basedomain} from '../../providers/routes';
import CountDown from 'react-native-countdown-component';

const height = Dimensions.get('window').height;

export default function AppNews({props}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    console.log(props.data);

    const [data, setData] = useState({
        name: null,
        Age: 0,
        Price:0,
        location:null,
        sort:null
    });


    const renderitem = (item) =>
            <View
                    style={Presets.offers}>
                            <View style={{width:"35%",margin:5,alignItems:'center'}}>
                            <Image
                                    source={{uri:basedomain + item.image}}
                                    style={{width:100,height:100,alignItems:'center',borderRadius:15}}
                                />
                            </View>
                            <View>
                                <Text style={Presets.HeaderOffer} >
                                    {item.name}
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[Presets.offerProprty,{backgroundColor:'#F8C05531',color:'#F8C055',}]}>
                                    {I18n.t(item.Age)} 
                                    </Text>
                                </View>
                                <View style={Presets.Bidding}>
                                        <Text style={Presets.BiddingText}>
                                        {item.last_price !== null? item.last_price : item.estimate_price}
                                        </Text>
                                </View>
                                <CountDown
                                    until={item.Bid_time}
                                    size={15}
                                    onFinish={() => 'Finished'}
                                    digitStyle={{backgroundColor: '#FFF'}}
                                    digitTxtStyle={{color: '#1CC625'}}
                                />
                            </View>
        </View>
    return (
        <View
                style={{width:"100%",alignItems:'center'}}
            >
            <ScrollView style={[Presets.offerContinarNew,{height:'100%'}]}>
                {props.data.map((item) => 
                    renderitem(item)
                )}  
            </ScrollView>  
    </View>
    );
}



