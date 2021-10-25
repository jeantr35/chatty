import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyAFnxHSVn0HdRwKKLizdtPYs96kCIM5Cgc",
  authDomain: "chatty-5ec78.firebaseapp.com",
  projectId: "chatty-5ec78",
  storageBucket: "chatty-5ec78.appspot.com",
  messagingSenderId: "320456109052",
  appId: "1:320456109052:web:c9d54c2ce4cc71da8d6079"
};

  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();