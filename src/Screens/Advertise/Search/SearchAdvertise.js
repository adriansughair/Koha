import React, {useState,useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch , useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {basedomain} from '../../../providers/routes';
import CountDown from 'react-native-countdown-component';
import Sort from './Sort';
import Filtes from './Filters';
import { popUpFillter, Show } from '../../../actions';

const height = Dimensions.get('window').height;

export default function SearchView({props}) {
    const dispatch = useDispatch();
const value = useSelector(state => state.user.Show);
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" , value);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    // console.log(props.data);

    const [data, setData] = useState({
        name: null,
        Age: 0,
        Price:0,
        location:null,
        sort:null
    });

    const Footer = () => {
        return  <View style={styles.footerContainer}>
       <TouchableOpacity style={styles.footeritem} 
            onPress={() => dispatch(Show(true))}
            >
            <Icon
                name="sort-amount-desc"
                size={25}
                color={'#755734'}
                />
            <Text>   {I18n.t('Sort_By')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footeritem} 
        onPress={() => dispatch(popUpFillter(true))}
        >
          <Icon
                name="filter"
                size={25}
                color={'#755734'}
                />
            <Text>   {I18n.t('Filter')}</Text>
        </TouchableOpacity>
        </View>
        }

    const renderitem = (item) =>
            <TouchableOpacity
                    onPress={() => props.navigation.push('App', { screen: 'Show',params: {id:item.id}})}
                    style={Presets.offers2}>
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
                                    <Text style={[Presets.offerProprty_Adver,{backgroundColor:'#3969F626',color:'#3969F6',}]}>
                                        {item.type}
                                    </Text>
                                    <Text style={[Presets.offerProprty_Adver,{backgroundColor:'#F8C05531',color:'#F8C055',}]}>
                                        {I18n.t(item.Age)}
                                    </Text>
                                </View>
                                <View style={Presets.Bidding}>
                                        <Text style={Presets.BiddingText}>
                                        {item.price} QAR
                                        </Text>
                                </View>
                            </View>
        </TouchableOpacity>
    return (
        <View
            style={{width:"100%",alignItems:'center'}}
            >
             <View style={Presets.searchInput}>
                <TextInput
                        style={Presets.textInput5}
                        onChangeText={(value) =>
                            setData({...data, name: value})
                        }
                        placeholder={' Search'}
                        value={data.name}
                />
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',padding:12,margin:10,backgroundColor:"#F6A939",borderRadius:15}}>
                        <Icon
                            name="search"
                            size={20}
                            color={ colors.white}
                        />
                </TouchableOpacity>
            </View>
            <ScrollView style={Presets.offerContinarNew}>
                {props.data.map((item) => 
                    renderitem(item)
                )}  
            </ScrollView>    
            {Footer()}
            <Sort />
            <Filtes />
    </View>
    );
}
const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        padding: 5,
        // height:50,
        backgroundColor:colors.white,
        width:"100%",
        // alignItems: 'flex-end',
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 15,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footeritem:{
        flexDirection: 'row',
        width:'50%',
        justifyContent:'center',
    }
});