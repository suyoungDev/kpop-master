import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC7IGc3v9HppIkJT5-0iSrxsIO-uKF3Jj0',
  authDomain: 'kpop-master-4b3cf.firebaseapp.com',
  projectId: 'kpop-master-4b3cf',
  storageBucket: 'kpop-master-4b3cf.appspot.com',
  messagingSenderId: '279496642161',
  appId: '1:279496642161:web:0b17e3611444a6d07755d0',
  measurementId: 'G-QCWJB531MY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
