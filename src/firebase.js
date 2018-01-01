import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBkxrJvfuUv1Voz_Kp0P5lf1rr-QNN3bSI",
    authDomain: "potluckhq.firebaseapp.com",
    databaseURL: "https://potluckhq.firebaseio.com",
    projectId: "potluckhq",
    storageBucket: "potluckhq.appspot.com",
    messagingSenderId: "520326930870"
}

firebase.initializeApp(config);

export const provider = new firebase
    .auth
    .GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;