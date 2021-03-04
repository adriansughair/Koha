import React, {useState,useEffect} from 'react';
import {Slider,StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
// import Loading from '../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';

const height = Dimensions.get('window').height;

export default function BiddingFiletrs({navigation , route}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        name: null,
        Age: 0,
        Price:0,
        location:null,
        sort:null
    });

    
    return (
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