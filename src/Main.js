import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUser, startApp} from './actions';
import {get, getStorageItem, setStorageItem} from './providers/provider';
import {getSettingsRoute} from './providers/routes';
import NavigationContainer from './Router';

function Main() {
    const [status, setStatus] = useState('loading');

    const dispatch = useDispatch();

    useEffect(() => {
        async function checkUser() {
            const user = await getStorageItem('user');
            const App = await getStorageItem('App');

            // console.log('=============================');
            // console.log(user);
            // console.log('=============================');
            // console.log(App);
            // console.log('=============================');

            if (user && user != null) {
                dispatch(setUser(user));
            }
            if (App && App != null) {
                dispatch(startApp(App));
            }
            setStatus('success');
        }
        checkUser();
    }, []);

    return status === 'success' && <NavigationContainer />;
}

export default Main;
