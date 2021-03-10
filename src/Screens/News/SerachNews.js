// @ts-nocheck
import React, {useState,useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/layout/Footer';
import Layout from '../../components/layout/Layout';
import {NewsShow,basedomain} from '../../providers/routes';
import {get} from '../../providers/provider';

function SerachNews  ({ navigation , props , route }) {

    const [status, setStatus] = useState('loading');
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
        }, []);

    const handleResponse = (response, json) => {
            switch (response.status) {
                case 200:
                    setData(json.data);
                    setStatus('start');
                    break;
                    default:
                    setStatus('loading');
            }
        }
        
        const getData = async () =>{
            
            const options = {route: NewsShow    };
            
            const response = await get(options);
            await response.json().then(
                (json) => handleResponse(response, json),
                (err) => console.log('err : ', err),
                );
        }
    const renderitem = (item) =>
            <TouchableOpacity
                    // onPress={() => navigation.navigate('ShowAccessories' , {
                    // itemId : item.id
                    // })}
                    style={Presets.offers2}>
                            <View style={{width:"35%",margin:5,alignItems:'center'}}>
                            <Image
                                    source={{uri:basedomain + item.image}}
                                    style={{width:100,height:100,alignItems:'center',borderRadius:15}}
                                />
                            </View>
                            <View>
                                <Text style={[Presets.HeaderOffer,{fontSize:14}]} >
                                   {item.title}
                                </Text>
                                <Text style={[Presets.HeaderOffer,{fontSize:14}]} >
                                   {item.description}
                                </Text>
                            </View>
        </TouchableOpacity>
        
    return (
        <Layout>
        <ImageBackground
                source={require('../../assest/img/BackGround.png')}
                style={{width:"100%",alignItems:'center'}}
            >
             <View style={Presets.searchInput}>
                <TextInput
                        style={Presets.textInput5}
                        placeholder={'Search'}
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
                {data.map((item) => 
                    renderitem(item)
                )} 
            </ScrollView>     
    </ImageBackground>
    </Layout>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor:colors.white,
        width:"100%",
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
        width:'50%',
        justifyContent:'center',
    }
});
export default SerachNews;