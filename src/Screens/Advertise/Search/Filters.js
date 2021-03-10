// @ts-nocheck
import React, {useState,useEffect} from 'react';
import {Slider,StyleSheet,TouchableOpacity, View, Text,Dimensions,Image,Modal , Picker, Platform} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch , useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import { Locations, popUpFillter, Price  , Age} from '../../../actions';

const height = Dimensions.get('window').height;

export default function BiddingFiletrs() {
    const dispatch = useDispatch();
      const Value = useSelector(state => state.user.ShowFillter);
      const Citys = useSelector(state => state.user.City);
    const [show, setShow] = useState(false);
    const [ages, setAges] = useState([]);
    const [city , setCity] = useState([]);
useEffect(() => {
    console.log("Value XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX props XXXXXXXXXXXXXXXXXXXX" , Value);
    console.log("CITY" , Citys);
     setShow(Value);
}, [Value]);


useEffect(() => {       
    const Ages= ['chick','virgin','second','third','fourth','fifth_more'];
    let AgesList = [];
    Ages.map((item) => {
        AgesList.push({
                label: I18n.t(item),
                value: item,
            });
        });
    setAges(AgesList);
    
    // City Destractuons ==> 
    const key = I18n.locale == 'ar' ? 'name_ar' : 'name_en';
    let citesList = [];
    Citys[0].map((item) => {
        citesList.push({
            label: item[key],
            value: item.id,
        });
    });
    setCity(citesList);
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP" , city)
}, []);

    const [data, setData] = useState({
        name: null,
        Age: 'PikerItems',
        Price:0,
        location:null,
        sort:null
    });

    console.log(data);

    const FilterData = () => {
        setShow(false);
        dispatch(popUpFillter(false));
        dispatch(Locations(data.location));
        dispatch(Price(data.Price));
        dispatch(Age(data.Age));
    }
    
    return (
          <Modal transparent={true} visible={show} >
                                <View style={{backgroundColor:"#000000aa",flex:1}} >
                                    <View style={{
                                        backgroundColor:colors.white,
                                        height:"70%",
                                        marginTop:"20%",
                                        marginLeft:15,
                                        marginRight:15,
                                        alignItems:"center",
                                        padding:10,
                                        borderRadius:50,
                                        }}> 
                                        <View style={Presets.PopupTitel2}>
                                             <Icon name="filter" size={20} color={'#755734'}/>
                                             <Text style={Presets.PopupTitelText}>Filter</Text>
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                            <View >
                                            <Text style={Presets.AddNameText}>
                                                {I18n.t(data.Age)}
                                            </Text>
                                            <Picker
                                            mode={Platform.OS === 'android' ? 'dropdown' : 'dialog'}
                                            selectedValue={data.Age}
                                            style={{position: 'relative' , bottom : 33 , left :55}}
                                            onValueChange={(itemValue) =>
                                            setData({...data , Age: itemValue})
                                            }>
                                            {ages.map((item) => 
                                                    <Picker.Item label={item.label} value={item.value} />
                                                )}
                                            </Picker>

                                            </View>
                                            <View>
                                                <Text>Price</Text>
                                                <Slider
                                                    style={{ width: 200, paddingBottom: 10 }}
                                                    step={2}
                                                    minimumValue={0}
                                                    maximumValue={15000}
                                                    value={data.Price}
                                                    onValueChange={val => setData ({...data, Price: val })}
                                                    thumbTintColor='#B39866'
                                                    maximumTrackTintColor='#000'
                                                    minimumTrackTintColor='#000'
                                                />
                                                <Text style={{paddingBottom : 30 , fontSize : 13 , fontWeight :"500", textAlign :'center'}}>{data.Price} QAR</Text>
                                            </View>
                                            <View style={{width:"80%"}}>
                                                <Text>Location</Text>
                                                <Picker
                                                selectedValue={data.location}
                                                style={Presets.dropdown}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setData({...data, location: itemValue})
                                                }>
                                                {city.map((item) => 
                                                    <Picker.Item label={item.label} value={item.value} />
                                                )}
                                            </Picker>    
                                            </View>
                                        </View>
                                        <TouchableOpacity style={Presets.PopupButtom} onPress={FilterData}>
                                            <Text style={Presets.PopupText}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
    </Modal>  
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