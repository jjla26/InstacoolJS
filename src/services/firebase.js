import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBXuMCODATBVYv8hnZYbg4r6pgRpVMaZM8",
    authDomain: "instacooljs.firebaseapp.com",
    databaseURL: "https://instacooljs.firebaseio.com",
    projectId: "instacooljs",
    storageBucket: "instacooljs.appspot.com",
    messagingSenderId: "242053545378"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()

