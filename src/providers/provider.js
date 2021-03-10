import AsyncStorage from '@react-native-community/async-storage';
import {url} from './routes';

const getUrl = (options) => {
    let requestUrl = url + options.route;
    if (options.params) {
        Object.keys(options.params).map((i) => {
            requestUrl += '&' + i + '=' + options.params[i];
        });
        requestUrl = requestUrl.replace('&', '?');
    }
    // console.log(requestUrl)
    return requestUrl;
};

export const setStorageItem = async (key, object) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(object));
        return true;
    } catch (e) {
        return e;
    }
};

export const getStorageItem = async (key) => {
    try {
        const object = await AsyncStorage.getItem(key);
        return JSON.parse(object);
    } catch (error) {
        return 'Error : ', error;
    }
};

export const get = async (options) => {
    const url = getUrl(options);
    console.log("get : ", url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + options.token,
        },
    });
    return response;
};

export const post = async (options) => {
    const url = getUrl(options);
    console.log(options);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + options.token,
        },
        body: JSON.stringify(options.body),
    });
    return response;
};

