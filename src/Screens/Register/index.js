import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,CheckBox,Image,ImageBackground,Dimensions,Modal} from 'react-native';
import {Presets} from '../../styles';
import I18n from '../../I18n';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from './Register';
import {post, setStorageItem} from '../../providers/provider';
import {registerRoute} from '../../providers/routes';
import ShowModal from './Modal';
import { useEffect } from 'react/cjs/react.development';

export default function RegisterIndex({navigation}) {
    
    const [data, setData] = useState({
        name: null,
        phone: null,
        password: null,
    });
    const [status, setStatus] = useState('start');

    const validate = (data) => {
        if (data.name == null || data.name == '') {
            alert(I18n.t('name') + ' ' + I18n.t('is_required'));
            return false;
        }else if (data.phone == null || data.phone == '') {
            alert(I18n.t('phone_number') + ' ' + I18n.t('is_required'));
            return false;
        }else if (data.password == null || data.password == '') {
            alert(I18n.t('password') + ' ' + I18n.t('is_required'));
            return false;
        }else if (data.password == null || data.password == '') {
            alert(I18n.t('password') + ' ' + I18n.t('is_required'));
            return false;
        }else if (data.email == null || data.email == '') {
            alert(I18n.t('Email') + ' ' + I18n.t('is_required'));
            return false;
        }else if (data.password.length < 8) {
            alert(I18n.t('password_must_be_at_least_8_characters'));
            return false;
        }
        return true;
    };


    const handleSubmit = async (data_from) => {
        const valid = validate(data_from);
        // setStatus('loading');
        if (valid) {
            const optoins = {
                route: registerRoute,
                body: data_from,
            };
            const response = await post(optoins);
            await response.json().then((json) => {
                console.log(json);
                if (json.message == 'User register successfully.') {
                    setStatus('success');
                } else {
                    if (json.data.phone) {
                        alert(I18n.t('the_phone_number_has_already_been_taken'))
                    }
                }
            });
        }
    };

    const renderTemplate = () => {
        switch (status) {
            // case 'loading':
            //     return <Text>Loading...</Text>;
            case 'start':
                const props = {handleSubmit: (data) => handleSubmit(data)};
                return <Register props={props} />;
            
            case 'success':
                const props2 = {show: true,navigation:navigation};
                return <ShowModal props={props2}/>}
        }

        return renderTemplate();
   
}
