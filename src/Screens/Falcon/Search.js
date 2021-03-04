import React, {useState} from 'react';
import {Ra,CheckBox,Slider,StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';
import { RadioButton } from 'react-native-paper';
import Filters from'../../components/Filters'

const height = Dimensions.get('window').height;

export default function Search({navigation , route}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

   
    const [data, setData] = useState({
        name: null,
        Age: 0,
        Price:0,
        location:null,
        sort:null
    });

    const renderitem = () =>
    <ScrollView style={Presets.offerContinar}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Show')}
                    style={Presets.offers}>
                            <View style={{width:"35%",margin:5,alignItems:'center'}}>
                            <Image
                                    source={require('../../assest/img/falcons.jpg')}
                                    style={{width:100,height:100,alignItems:'center',borderRadius:15}}
                                />
                            </View>
                            <View>
                                <Text style={Presets.HeaderOffer} >
                                    Falcon
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[Presets.offerProprty,{backgroundColor:'#3969F626',color:'#3969F6',}]}>
                                        Male
                                    </Text>
                                    <Text style={[Presets.offerProprty,{backgroundColor:'#F8C05531',color:'#F8C055',}]}>
                                        1 Years 
                                    </Text>
                                </View>
                                <View style={Presets.InfoLoc2}>
                                        <Icon name="map-marker" size={15} color={'#DAD7E0'}/>
                                        <Text style={Presets.TextLoc2}>
                                                Doha, Qatar(2 km)
                                        </Text>
                                </View>
                                <View>
                                    <Text style={Presets.price} >2,500QAR </Text>                        
                                </View>
                            </View>
        </TouchableOpacity>
    </ScrollView> 

    const SortData = () =>{
        setShow(false);
    };

    const FilterData = (val) =>{
        // const props = {
        //     show: val,
        //     handleShow: (data) => handleShow(data),
        // };
        // <Filters show={props}/>
        setShow2(val);
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
            
                {renderitem()}
                   
    </ImageBackground>
    
    {/* The Footer section */}
    <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footeritem} onPress={() => setShow(true)}>
                    <Icon
                        name="sort-amount-desc"
                        size={25}
                        color={'#755734'}
                    />
                    <Text>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem} onPress={() => setShow2(true)}>
                  <Icon
                        name="filter"
                        size={25}
                        color={'#755734'}
                    />
                    <Text>Filter</Text>
        </TouchableOpacity>
    </View>
    {/* End Footer section */}

    {/* The Modals section */}
    <Modal transparent={true}  visible={show} >
                                <View style={{backgroundColor:"#000000aa",flex:1}} >
                                    <View style={{
                                        backgroundColor:colors.white,
                                        height:"60%",
                                        marginTop:"20%",
                                        marginLeft:15,
                                        marginRight:15,
                                        alignItems:"center",
                                        padding:10,
                                        borderRadius:50,

                                        }}> 
                                        <View style={Presets.PopupTitel2}>
                                             <Icon name="sort-amount-desc" size={20} color={'#755734'}/>
                                             <Text style={Presets.PopupTitelText}>  Sort By</Text>
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    style={{color:colors.default}}
                                                    value="Newest"
                                                    status={ data.sort === 'Newest' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({...data, sort: 'Newest'})}
                                                /> 
                                                <Text style={Presets.RadioText}>Newest</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Nearest"
                                                    status={ data.sort === 'Nearest' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({...data, sort: "Nearest"})}
                                                />
                                                <Text style={Presets.RadioText}>Nearest</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Hight Price"
                                                    status={ data.sort === 'Hight Price' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({...data, sort: 'Hight Price'})}
                                                />
                                                <Text style={Presets.RadioText} >Hight Price</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Low Price"
                                                    status={ data.sort === 'second' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({...data, sort: 'Low Price'})}
                                                />
                                                <Text style={Presets.RadioText}>Low Price</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Latest Product"
                                                    status={ data.sort === 'Latest Product' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({...data, sort: 'Latest Product'})}
                                                />
                                                <Text style={Presets.RadioText}>Latest Product</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={Presets.PopupButtom} onPress={() => SortData()}>
                                            <Text style={Presets.PopupText}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
    </Modal>
  {/* End Sort Modal section */}
  
  {/* The Filter Modal section */}
  <Modal transparent={true} visible={show2} >
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
                                                <Text>Age</Text>
                                                <Slider
                                                    style={{ width: 200, paddingBottom: 30, }}
                                                    step={1}
                                                    minimumValue={0}
                                                    maximumValue={10}
                                                    value={data.Age} 
                                                    onValueChange={val => setData ({...data, Age: val})}
                                                    thumbTintColor='#B39866'
                                                    maximumTrackTintColor='#000'
                                                    minimumTrackTintColor='#000'
                                                />
                                            </View>
                                            <View>
                                                <Text>Price</Text>
                                                <Slider
                                                    style={{ width: 200, paddingBottom: 30, }}
                                                    step={1}
                                                    minimumValue={0}
                                                    maximumValue={100000}
                                                    value={data.Price}
                                                    onValueChange={val => setData ({...data, Price: val })}
                                                    thumbTintColor='#B39866'
                                                    maximumTrackTintColor='#000'
                                                    minimumTrackTintColor='#000'
                                                />
                                            </View>
                                            <View style={{width:"80%",}}>
                                                <Text>Location</Text>
                                                <View style={Presets.checkBoxRow}>
                                                   <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}location
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Doha</Text>
                                                   </View>
                                                   <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Ar Rayyan</Text>
                                                   </View>
                                                   <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Umm Salal</Text>
                                                   </View>                                                
                                                </View>
                                                <View style={Presets.checkBoxRow}>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Al Wakrah</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme} >
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Al Khawr</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Ash Shihaniyah</Text>
                                                    </View>
                                                </View>
                                                <View style={Presets.checkBoxRow}>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Dukhan</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Musay'id</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Madinat ash Shamal</Text>
                                                    </View>
                                                </View>
                                                <View style={Presets.checkBoxRow}>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Al Wukayr</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Az Za'ayin</Text>
                                                    </View>
                                                    <View style={Presets.checkBoxItme}>
                                                        <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>Umm Salal 'Ali</Text>
                                                    </View>
                                                </View>
                                                <View style={Presets.checkBoxRow}>
                                                    <View style={Presets.checkBoxItme}>
                                                       <CheckBox
                                                                // value={isSelected}
                                                                // onValueChange={setSelection}
                                                                style={Presets.checkBox}
                                                            />
                                                        <Text style={Presets.checkBoxText}>All Cities</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={Presets.PopupButtom} onPress={() => FilterData(false)}>
                                            <Text style={Presets.PopupText}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
    </Modal>                            
    {/* End Filter Modal section */}


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