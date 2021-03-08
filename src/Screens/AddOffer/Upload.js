import React, {useState,useEffect} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../styles';
import Layout from '../../components/layout/Layout';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import {useDispatch,useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
import {post, setStorageItem} from '../../providers/provider';
import {basedomain, upload_image} from '../../providers/routes';
import ImagePicker from 'react-native-image-picker';
import Loading from '../../components/Loading'

const height = Dimensions.get('window').height;

const options = {
    base64: true,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default function Upload({props}) {

    const [cities, setCities] = useState([]);
    const [types, setTypes] = useState([]);
    const user = useSelector((state) => state.user.user);
    const [ImageLoader, setImageLoader] = useState(false)
    const [Ages, setAges] = useState([]);

    const [data, setData] = useState({
        name: null,
        estimate_price: null,
        image: null,
        sex:true,
        location: null,
        Age: null,
        type: null,
        user_id: user.id,
        Description: null,
        Bid_time: null,
    });

    const uploadImage = async () => {
        // setImageLoader(true);

        ImagePicker.showImagePicker(options, async (response) => {

            console.log("===============");
            console.log(response);
            console.log("===============");

            if (response.didCancel) {
                setImageLoader(false);
            } else if (response.error) {
                setImageLoader(false);
            } else {
                const type = response.type.split('/')[1];
                const resp = await post({
                    route: upload_image,
                    body: {
                        image: `data:image/${type};base64,` + response.data,
                        user_id:user.id,
                    },
                });
                await resp
                    .json()
                    .then((json) => {
                        console.log(json);
                        setImageLoader(false);
                        setData({ ...data, image: json.data.filepath});
                        console.log("===============");
                        console.log(data);
                        console.log("===============");
                    })
                    .catch((e) => alert(I18n.t('unexpected_error')));
            }
        });
    };


    
    useEffect(() => {
        const key = I18n.locale == 'ar' ? 'name_ar' : 'name_en';
        let citesList = [];
        props.data.cites.map((item) => {
            citesList.push({
                label: item[key],
                value: item[key],
            });
        });
        setCities(citesList);
    }, []);

    useEffect(() => {
       
        const key = I18n.locale == 'ar' ? 'name_ar' : 'name_en';
        let typesList = [];
        props.data.types.map((item) => {
            typesList.push({
                label: item[key],
                value: item[key],
            });
        });
        setTypes(typesList);
    }, []);


    useEffect(() => {
       
        const Ages= ['chick','virgin','second','third','fourth','fifth_more'];
        const key = I18n.locale == 'ar' ? 'name_ar' : 'name_en';
        let AgesList = [];
        Ages.map((item) => {
            AgesList.push({
                    label: I18n.t(item),
                    value: item,
                });
            });
        
        setAges(AgesList);
    }, []);

    const handleSubmit = () =>{
        props.handleSubmit(data);
    }

return (
    <ScrollView style={Presets.UploadPage}>
        <ImageBackground
                source={require('../../assest/img/BackGround.png')}
                style={{width:"100%",
                alignItems:'center'
            }}
            >
        <View style={{width:'90%'}}>
            <View style={{marginTop:15,marginBottom:25}}>
                <Text style={{fontSize:27,fontFamily: 'Montserrat-Bold',color:colors.default}}>
                    {I18n.t('Add_Ads')}
                </Text>
            </View>
            {ImageLoader ? <Loading color={colors.orange} /> :
                <TouchableOpacity
                    style={{position: 'relative',alignItems:'center'}}
                    onPress={() => uploadImage()}>
                      {data.image?
                        <Image
                            source={{
                                uri: data.image
                                    ? basedomain + data.image
                                    : 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
                            }}
                            style={{height: 100, width: 100, borderRadius: 5}}
                        />
                        :<View style={Presets.UploadImage}>
                            <Icon
                                name="camera"
                                size={65}
                                color={'#DAD7E0'}
                            />
                            <Text style={Presets.UploadImageText} >
                                {I18n.t('Upload_Image')}
                            </Text>
                        </View> 
                    }
                </TouchableOpacity>
            }
            <View>
                <Text style={Presets.AddNameText} >
                    {I18n.t('Ad_Name')}
                </Text>
                <TextInput
                        style={Presets.textInput2}
                        onChangeText={(value) =>
                            setData({...data, name: value})
                        }
                        placeholder={I18n.t('Ad_Name')}
                        value={data.name}
                />
            </View>
            <View>
                <Text style={Presets.AddNameText} >
                     {I18n.t('Type_Falcon')}
                </Text>
                <Picker
                    selectedValue={data.type}
                    style={Presets.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data, type: itemValue})
                    }>
                    {types.map((item) => 
                        <Picker.Item label={item.label} value={item.value} />
                    )}
                </Picker>
            </View>
            <View>
                <Text style={Presets.AddNameText} >
                     {I18n.t('Location')}
                </Text>
                <Picker
                    selectedValue={data.location}
                    style={Presets.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data, location: itemValue})
                    }>
                    {cities.map((item) => 
                        <Picker.Item label={item.label} value={item.value} />
                    )}
                </Picker>
            </View>
            <View>
                <Text style={Presets.AddNameText}>
                     {I18n.t('Age')}
                </Text>
                <Picker
                    selectedValue={data.Age}
                    style={Presets.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data, Age: itemValue})
                    }>
                    {Ages.map((item) => 
                        <Picker.Item label={item.label} value={item.value} />
                    )}
                </Picker>
            </View>
            <View>
                <Text style={Presets.AddNameText}>
                   {I18n.t('Starting_price')}
                </Text>
                <TextInput
                        style={Presets.textInput2}
                        onChangeText={(value) =>
                            setData({...data, estimate_price: value})
                        }
                        keyboardType="phone-pad"
                        placeholder={I18n.t('Starting_price')}
                        value={data.estimate_price}
                />
            </View>
            <View>
                <Text style={Presets.AddNameText}>
                   {I18n.t('Term_Bid')}
                </Text>
                <TextInput
                        style={Presets.textInput2}
                        onChangeText={(value) =>
                            setData({...data, Bid_time: value})
                        }
                        keyboardType="phone-pad"
                        placeholder={I18n.t('EnterBid_days')}
                        value={data.Bid_time}
                />
            </View>
            <View>
                <Text style={Presets.AddNameText}>
                {I18n.t('Description')}
                </Text>
                <TextInput
                        style={Presets.textInput4}
                        onChangeText={(value) =>
                            setData({...data, Description: value})
                        }
                        placeholder={I18n.t('Description_Ads')}
                        textAlignVertical={'top'}
                        value={data.Description}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    style={Presets.Loginbutton}
                    onPress={() => handleSubmit()}>
                        <Text style={Presets.login}>{I18n.t('Post')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  </ScrollView>
    );
}
