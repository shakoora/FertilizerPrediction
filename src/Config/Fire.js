import firebase from 'firebase';

const config={
    apiKey: "AIzaSyCiwKqeOwu4rBvQNVMokHcYF9Z7wJExt-o",
    authDomain: "aimodule-855e5.firebaseapp.com",
    databaseURL: "https://aimodule-855e5.firebaseio.com",
    projectId: "aimodule-855e5",
    storageBucket: "aimodule-855e5.appspot.com",
    messagingSenderId: '695506144069'
};

const fire = firebase.initializeApp(config);
export default fire;


