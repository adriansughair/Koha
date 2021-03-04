import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions} from 'react-native';
import colors from '../../styles/colors';
import I18n from '../../I18n';
import Login from './Login'
import {useDispatch,useSelector} from 'react-redux';
import {setUser} from '../../actions';
import {post, setStorageItem} from '../../providers/provider';
import {loginRoute} from '../../providers/routes';
export default function LoginIndex({navigation}) {
    
    const user2 = useSelector((state) => state.user);
    const [flag , setFlag] = useState(false);
    const dispatch = useDispatch();
    
    const [data, setData] = useState({
            phone_number: null,
            password: null,
    });

    const handleResponse = async (response, json) => {
        switch (response.status) {
            case 200:
                await setStorageItem('user', json.data);
                dispatch(setUser(json.data));
                navigation.navigate('App');
                break;
            default:
                alert('Your phone or password is invaild');
        }
    };
    
    const handleSubmit = async (data) => {
        if (data.phone_number == null && data.password == null) {
            alert(I18n.t('please_add_your_phone_number_and_password'));
        } else {
            const optoins = {
                route: loginRoute,
                body: data,
            };
            const response = await post(optoins);
            await response
                .json()
                .then((json) => handleResponse(response, json));
        }
    };

    const props = {
        handleSubmit: (data) => handleSubmit(data),
        navigation: navigation
    };
    return <Login props={props} />;
    
}
