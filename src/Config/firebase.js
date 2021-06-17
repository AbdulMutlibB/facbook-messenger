import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

apiKey: "AIzaSyAcLnoAgGCpkYRzp7zi6g_AI6UvdblyeVo",
authDomain: "messenger-clone-755f8.firebaseapp.com",
databaseURL: "https://messenger-clone-755f8-default-rtdb.firebaseio.com",
projectId: "messenger-clone-755f8",
storageBucket: "messenger-clone-755f8.appspot.com",
messagingSenderId: "1047384172878",
appId: "1:1047384172878:web:83ca1165c03abe1313961f",
measurementId: "G-GZKJ89TZ7Y"

});

const db = firebase.firestore();

export default db;