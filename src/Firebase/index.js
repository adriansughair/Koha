import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const config = {
    apiKey: "AIzaSyAh4rmMNVX8Flb5kzRoAtNofC04cFJ4Sgg",
    authDomain: "koha-ec38d.firebaseapp.com",
    databaseURL: "https://koha-ec38d-default-rtdb.firebaseio.com",
    projectId: "koha-ec38d",
    storageBucket: "koha-ec38d.appspot.com",
    messagingSenderId: "588907945724",
    appId: "1:588907945724:web:c0384b381bd38da76f0179",
    measurementId: "G-CMEC7F93EV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default () => {
    return {database};
};
