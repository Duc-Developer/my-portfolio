import firebase from 'firebase';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl6Yjaj9saTrCgeNUCeqPtmoHscvHwvZ0",
    authDomain: "my-portfolio-f7109.firebaseapp.com",
    databaseURL: "https://my-portfolio-f7109.firebaseio.com",
    projectId: "my-portfolio-f7109",
    storageBucket: "my-portfolio-f7109.appspot.com",
    messagingSenderId: "239023323515",
    appId: "1:239023323515:web:5b20b412ca6318afe565de",
    measurementId: "G-CQGJNWSX8H"
};

const app = firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const storage = firebase.storage();

export { storage, database, app }
