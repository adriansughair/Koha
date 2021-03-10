// @ts-nocheck
import React, {useState , useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch , useSelector} from 'react-redux';;
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import SortAccessories from './SortAccessories';
import FiltersAccessories from './FiltersAccessories';
import { AccessorieFilter, basedomain } from '../../providers/routes';
import {post} from '../../providers/provider';
import { Show , popUpFillter , City } from '../../actions/AccessoriesActions';

const height = Dimensions.get('window').height;

export default function SearchAccessories({navigation , route}) {
    const dispatch = useDispatch();
        const Sorting = useSelector(state => state.access.Sort);
        const Loctions = useSelector(state => state.access.Locations);
        const Price = useSelector(state => state.access.Price);
         const [value , setValue] = useState([]);

    useEffect(() => {
        getData();
        }, [Sorting]);

        useEffect(() => {
            getData();
        }, [Price]);

        useEffect(() => {
              getData();
        }, [Loctions])
    const getData = async () =>{   
        const options = {
        route: AccessorieFilter , 
        body : {
            lang : I18n.locale ,
            sort : Sorting ,
            location : Loctions ,
            price : Price 
        }};
        const response = await post(options);
        await response.json().then(
            (json) =>  {
                dispatch(City([...json.data.cites]));
                setValue(json.data.data);
            },
            (err) => console.log('err : ', err),
            );
    }  

    const [data, setData] = useState({
        name:null,
        Age: 0,
        Price:0,
        location:null,
        sort:null
    });

    const renderitem = (item , key) =>
            <TouchableOpacity
            key={key}
                    onPress={() => navigation.navigate('ShowAccessories' , {
                        itemId : item.id
                    })}
                    style={Presets.offers}>
                            <View style={{width:"35%",margin:5,alignItems:'center'}} key={item.user_id}>
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
                                        {I18n.t(item.status)}
                                    </Text>
                                </View>
                                <View style={Presets.InfoLoc2}>
                                        <Icon name="map-marker" size={15} color={'#DAD7E0'}/>
                                        <Text style={Presets.TextLoc2}>
                                                {item.location}
                                        </Text>
                                </View>
                                <View>
                                    <Text style={Presets.price}>{item.price}</Text>                        
                                </View>
                            </View>
        </TouchableOpacity> 

    const SortData = () =>{
        setShow(false);
    };
    return (
    <Layout>
            <ImageBackground
                source={require('../../assest/img/BackGround.png')}
                style={{width:"100%",height:height*0.77,alignItems:'center'}}
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
            <ScrollView style={Presets.offerContinar}>
                {value.map((data , key) => 
                    renderitem(data , key)
                )}
                </ScrollView>
              <SortAccessories/>
              <FiltersAccessories/>     
    </ImageBackground>
    <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footeritem} onPress={() => dispatch(Show(true))}>
                    <Icon
                        name="sort-amount-desc"
                        size={25}
                        color={'#755734'}
                    />
                    <Text>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem} onPress={() => dispatch(popUpFillter(true))}>
                  <Icon
                        name="filter"
                        size={25}
                        color={'#755734'}
                    />
                    <Text>Filter</Text>
        </TouchableOpacity>
    </View>
    </Layout>
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