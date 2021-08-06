import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAdxnrLzx_HpUvMmeuuCwUrtplrCushd2k",

    authDomain: "techtestdigital22.firebaseapp.com",

    databaseURL: "https://techtestdigital22-default-rtdb.firebaseio.com",

    projectId: "techtestdigital22",

    storageBucket: "techtestdigital22.appspot.com",

    messagingSenderId: "299168113557",

    appId: "1:299168113557:web:09cf0295f3a1bcbbbe4c9c",

    measurementId: "G-3JMCY0GLBN"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
