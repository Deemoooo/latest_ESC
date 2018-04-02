import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDk_A3zDfU3AWpJOztAUSKvixfedCdyTSM",
    authDomain: "esc1-7acbe.firebaseapp.com",
    databaseURL: "https://esc1-7acbe.firebaseio.com",
    projectId: "esc1-7acbe",
    storageBucket: "esc1-7acbe.appspot.com",
    messagingSenderId: "1031631581319",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};