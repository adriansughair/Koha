import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch,useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import {AddBidding} from '../../../providers/routes';
import {post} from '../../../providers/provider';
import {basedomain} from '../../../providers/routes';

const height = Dimensions.get('window').height;

export default function ShowBidding({props}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [ isLoading, setLoad]= useState(false)
    const [data, setData] = useState(props.data.Bid);
    const [BidPrice, setBidPrice] = useState(props.data.BidPrice);
    const [Bidding, setBidding] = useState(null);

    const handleResponse = async (response, json) => {
        console.log(json);
        switch (response.status) {
            case 200:
                 alert(I18n.t('Bidding_done'));
                break;
            default:
                alert(I18n.t('Bidding_invaild'));
        }
    };

    const handleSubmit = async () => {
        const SubmitData ={
            user_id:user.id,
            new_price:Bidding,
            id:data.id,
        }
        if (Bidding == null) {
            // alert(I18n.t('please_add_your_phone_number_and_password'));
            alert("Please Add Your Bidding");
        } else {
            const optoins = {
                route: AddBidding,
                body: SubmitData,
            };
            const response = await post(optoins);
            await response
                .json()
                .then((json) => handleResponse(response, json));
        }
    }

    const renderitem = (item) =>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Presets.offerProprty2,{paddingLeft:10,paddingRight:10,}]}>
                        {item.price}  
                    </Text>
                    <Text style={[Presets.offerProprty2,{width:'20%',paddingLeft:15,paddingRight:15}]}>
                        {item.user_id}
                    </Text>
                    <Text style={[Presets.offerProprty2]}>
                        {item.created_at.substring(0, 10)}  
                    </Text>
                    <Text style={[Presets.offerProprty2,{paddingLeft:10,paddingRight:10,}]}>
                        {item.created_at.substring(11, 16)}  
                    </Text>
                </View>
            </View>
    

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
                            </View>
                            <View>
                                    <Text style={Presets.price2} >{data.estimate_price} QAR </Text>                        
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
                            <View>
                                <CountDown
                                        until={data.Bid_time}
                                        size={20}
                                        onFinish={() => 'Finished'}
                                        digitStyle={{backgroundColor: '#FFF'}}
                                        digitTxtStyle={{color: '#1CC625'}}
                                    />
                            </View>
                                {(user !==null && user.id !== data.user_id) &&
                                    <View style={{width:'90%',alignItems:'center'}}>
                                        <View>
                                            <Text style={Presets.AddBid}>Add your Bid</Text>
                                        </View>
                                        <View style={Presets.Bid}>
                                            <TextInput
                                                    style={Presets.textInput6}
                                                    onChangeText={(value) =>
                                                        setBidding(value)
                                                    }
                                                    value={Bidding}

                                            />
                                            <TouchableOpacity 
                                                style={Presets.BidButtoun}
                                                onPress={()=>handleSubmit()}
                                            > 
                                                <Text style={Presets.BidButtounText} >Add</Text>
                                            </TouchableOpacity>                                
                                        </View>
                                    </View>
                                }
                                <View>
                                    <Text style={Presets.AddBid} >All bids for this offer</Text>
                                    <View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={[Presets.offerProprty3]}>
                                                Bid price
                                            </Text>
                                            <Text style={[Presets.offerProprty3,{width:'20%'}]}>
                                                User  
                                            </Text>
                                            <Text style={[Presets.offerProprty3]}>
                                                Date  
                                            </Text>
                                            <Text style={[Presets.offerProprty3]}>
                                                Time  
                                            </Text>
                                        </View>
                                    </View>
                                        {BidPrice.map((item) => 
                                                renderitem(item)
                                        )} 
                                </View>
                    </View>
            </View>
       );
}
