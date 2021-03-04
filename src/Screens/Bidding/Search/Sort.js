import React, {useState,useEffect} from 'react';
import {Ra,CheckBox,Slider,StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';

const height = Dimensions.get('window').height;

export default function BiddingSort({navigation , route}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
   
    const [data, setData] = useState({
        sort:null
    });
   
    return (
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
    );
}