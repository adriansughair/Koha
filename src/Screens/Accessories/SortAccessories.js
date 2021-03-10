// @ts-nocheck

import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch , useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { Show, Sorting , popUpFillter  , Locations , Price} from '../../actions/AccessoriesActions';

const height = Dimensions.get('window').height;

export default function SortAccessories() {
    const dispatch = useDispatch();
    const value = useSelector(state => state.access.Show);
    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        sort: ''
    });
   
   useEffect(() => {
        setShow(value);
   }, [value])
   
    const SortData = () => {
        dispatch(Sorting(data.sort));
        dispatch(Show(false));
    }

    const ClearSort = () => {
        dispatch(Locations(0));
        dispatch(Price(0));
        dispatch(Sorting(''));
    }

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
                                        <View>
                                           {/* <Text style={{color : 'brown' , fontSize : 18 , fontWeight : 'bold'}}>{test}</Text> */}
                                        </View>
                                        <View style={Presets.AlertMessage}>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    style={{color:colors.default}}
                                                    value="Newest"
                                                    status={ data.sort === 'Newest' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({sort: 'Newest'})}
                                                /> 
                                                <Text style={Presets.RadioText}>Newest</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Nearest"
                                                    status={ data.sort === 'Oldest' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({sort: "Oldest"})}
                                                />
                                                <Text style={Presets.RadioText}>Oldest</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Hight Price"
                                                    status={ data.sort === 'Hight Price' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({sort: 'Hight Price'})}
                                                />
                                                <Text style={Presets.RadioText} >Hight Price</Text>
                                            </View>
                                            <View style={Presets.RadioItme}>
                                                <RadioButton
                                                    value="Low Price"
                                                    status={ data.sort === 'Low Price' ? 'checked' : 'unchecked' }
                                                    onPress={() => setData ({sort: 'Low Price'})}
                                                />
                                                <Text style={Presets.RadioText}>Low Price</Text>
                                            </View>
                                            </View>
                                            <View style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'center' , padding : 20}}>
                                        <TouchableOpacity style={[Presets.PopupButtom , {margin : 12}]} onPress={() => SortData()}>
                                            <Text style={Presets.PopupText}>OK</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[Presets.PopupButtom , {margin : 12}]} onPress={() => ClearSort()}>
                                            <Text style={Presets.PopupText}>Clear Sort</Text>
                                        </TouchableOpacity>
                                            </View>
                                    </View>
                                </View>
                                </Modal>
);
}