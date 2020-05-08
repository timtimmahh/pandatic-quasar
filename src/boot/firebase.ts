import { auth, firestore, initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { VueConstructor } from 'vue';


const firebaseConfig = {
  apiKey: 'AIzaSyAR_cgkMfVasxDSlj2pf787GwIR6rrcPEs',
  authDomain: 'redcross-data.firebaseapp.com',
  databaseURL: 'https://redcross-data.firebaseio.com',
  projectId: 'redcross-data',
  storageBucket: 'redcross-data.appspot.com',
  messagingSenderId: '224457547724',
  appId: '1:224457547724:web:0c603be11db9630d2d8769',
  measurementId: 'G-B6SBY0J4FV'
};

declare module 'vue/types/vue' {
  interface Vue {
    $fireApp: firebase.app.App;
    $fireAuth: firebase.auth.Auth,
    $fireDB: firebase.firestore.Firestore
  }
}

export default ({ Vue }: { Vue: VueConstructor }) => {
  // Initialize Firebase from settings
  const app = initializeApp(firebaseConfig)
  Vue.prototype.$fireApp = app
  Vue.prototype.$fireAuth = auth(app)
  Vue.prototype.$fireDB = firestore(app)

};
