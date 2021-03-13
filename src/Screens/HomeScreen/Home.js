// @ts-nocheck
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import I18n from '../../I18n';
// import Loading from '../components/Loading'
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';
import { url } from '../../providers/routes';
import {basedomain} from '../../providers/routes';

const height = Dimensions.get('window').height;

export default function Home({props}) {
    const dispatch = useDispatch();

    const [ isLoading, setLoad]= useState(false);
    const [navigation, setNavigation]= useState(props.navigation);

    const [activeIndex, setActiveIndex] = useState();

    const handleSubmit = (name)=>{
        // console.log(name)
        navigation.navigate('Search');
    };

    // const render =()=>{

    // }

    const renderBannerItem = ({item,index}) => {
        return <View style={Presets.ads}>
                    <Image 
                        style={Presets.adsImage}
                        source={{
                            uri: item.image
                                ? basedomain + item.image
                                : 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
                        }}/>
                    <View style={Presets.adsItem}>
                    <Text
                        style={Presets.adsText}
                        >{item.Description}</Text>
                    </View>
                </View>
    }

    return (
            <View
                style={{width:"100%",height:height*0.8}}
            >
            <View style={Presets.HomeScreen}>
                 <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={props.data}
                        sliderWidth={300}
                        itemWidth={330}
                        renderItem={renderBannerItem}
                        onSnapToItem = { index => setActiveIndex(index) } 
                  />
                        {}
                   {/* </Swiper> */}
                  <View style={Presets.Maincategory}>
                      <View style={Presets.category}>
                           <TouchableOpacity 
                                style={Presets.Subcategory}
                                onPress={() => props.navigation.push('App', { screen: 'AppNews'})}
                                >
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/news1.png')}/>
                                <View style={Presets.Itemcategory}>
                                     <Text style={Presets.Textcategory}>
                                     {I18n.t('AppNews')}
                                    </Text>
                                </View>
                           </TouchableOpacity>
                           <TouchableOpacity 
                                style={Presets.Subcategory}
                                onPress={() => props.navigation.push('App', { screen: 'Search'})}
                                >
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/Adv.png')}/>
                                <View style={Presets.Itemcategory}>
                                    <Text style={Presets.Textcategory}>
                                    {I18n.t('Advertise')}
                                    </Text>
                                </View>
                           </TouchableOpacity>
                      </View> 
                      <View style={Presets.category}>
                           <TouchableOpacity onPress={() => navigation.navigate('SerachNews')} style={Presets.Subcategory}>
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/news2.png')}/>
                                <View style={Presets.Itemcategory}>
                                    <Text style={Presets.Textcategory}>
                                    {I18n.t('News')}
                                    </Text>
                                </View>
                                </TouchableOpacity>
                           <TouchableOpacity 
                                style={Presets.Subcategory}
                                onPress={() => navigation.navigate('SearchAccessories')}>
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/Hun.png')}/>
                                <View style={Presets.Itemcategory}>
                                    <Text style={Presets.Textcategory}>
                                    {I18n.t('Hunting_Accessories')}
                                    </Text>
                                </View>
                           </TouchableOpacity>
                      </View> 
                      <View style={Presets.category}>
                            <TouchableOpacity 
                                style={Presets.Subcategory}
                                onPress={() => props.navigation.push('App', { screen: 'BidNews'})}>
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/news3.png')}/>
                                <View style={Presets.Itemcategory}>
                                    <Text style={Presets.Textcategory}>
                                    {I18n.t('Bidding_News')}
                                    </Text>
                                </View>
                           </TouchableOpacity>
                           <TouchableOpacity 
                                style={Presets.Subcategory}
                                onPress={() => props.navigation.push('App', { screen: 'SearchBidding'})}>
                                <Image 
                                    style={Presets.Imgcategory}
                                    source={require('../../assest/img/bid.png')}/>
                                <View style={Presets.Itemcategory}>
                                    <Text style={Presets.Textcategory}>
                                    {I18n.t('Bidding')}
                                    </Text>
                                </View>
                           </TouchableOpacity>
                      </View> 
                  </View>
            </View>
            </View>
    );
}
