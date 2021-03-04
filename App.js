import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import I18n from './src/I18n/index';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Settings from './src/Screens/Settings';
import Main from './src/Main';
import NavigationContainer from './src/Router';
import {getStorageItem} from './src/providers/provider';
import SplashScreen from 'react-native-splash-screen'

const App: () => React$Node = () => {
    const [status, setStatus] = useState('loading');    
    useEffect(() => {
        async function getLocaleFromStorage() {
            // console.ignoredYellowBox();
            const locale = await getStorageItem('default_lang');
            if (locale) {
              I18n.locale = locale;
              setStatus('success');
            } else {
              I18n.locale = I18n.locale.substring(0, 2);
              setStatus('missing_lang');
            }
          }
        getLocaleFromStorage();
        setStatus('success');
        SplashScreen.hide()
    }, []);

    const renderTemplate = () => {
        switch (status) {
            case 'success':
                return <Main />;
            case 'missing_lang':
                return <Settings init={true} />;
            case 'loading':
                return <Text></Text>;
        }
    };

    

    return <Provider store={store}>{renderTemplate()}</Provider>;
};

export default App;