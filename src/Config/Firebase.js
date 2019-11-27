import firebase from "firebase"
const config = {
    apiKey: "AIzaSyD7XgBYVJJLY1osSgPzJxyjK3mPCOq0NMo",
    authDomain: "myfirstapp-6b0cb.firebaseapp.com",
    databaseURL: "https://myfirstapp-6b0cb.firebaseio.com",
    projectId: "myfirstapp-6b0cb",
    storageBucket: "myfirstapp-6b0cb.appspot.com",
    messagingSenderId: "338748192874",
    appId: "1:338748192874:web:daa984c5fc16b3961b7213",
    measurementId: "G-G3DYJMELWX"
}

const FirebaseApp = firebase.initializeApp(config)
export default FirebaseApp
