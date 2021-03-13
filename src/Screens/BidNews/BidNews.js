import React, {useState,useEffect} from 'react';
import {Ra,CheckBox,Slider,StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
// import Loading from '../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {basedomain} from '../../providers/routes';
import CountDown from 'react-native-countdown-component';

const height = Dimensions.get('window').height;

export default function BidNews({props}) {
    
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
                                    <Text style={[Presets.offerProprty,{backgroundColor:'#3969F626',color:'#3969F6',}]}>
                                        {item.type}
                                    </Text>
                                    <Text style={[Presets.offerProprty,{backgroundColor:'#F8C05531',color:'#F8C055',}]}>
                                        {I18n.t(item.Age)}
                                    </Text>
                                </View>
                                <View style={Presets.Bidding}>
                                        <Text style={Presets.BiddingText}>
                                        {item.last_price !== null? item.last_price : item.estimate_price}
                                        </Text>
                                </View>
                                <View style={Presets.owner}>
                                        <Text style={Presets.ownerText}>
                                            {I18n.t('winner')}
                                        </Text>
                                        <Text style={Presets.ownerVal}>
                                            {item.owner}
                                        </Text>
                                </View>
                            </View>
        </View>
    return (
        <View
                style={{width:"100%",alignItems:'center'}}
            >
            <View style={Presets.FinishBidHeader}>
                <Text style={Presets.FinishBidText}>
                    {I18n.t('Finished_Bids')}
                </Text>
            </View>
            <ScrollView style={Presets.offerContinar}>
                {props.data.map((item) => 
                    renderitem(item)
                )}      
            </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 15,
        alignItems: 'flex-end',
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 5,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footeritem:{
        flexDirection: 'row',
        width:'25%',
        justifyContent: 'space-around',
    }
});