import firebaseConfig from '../statics/firebase-config'
import { auth, firestore, initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { VueConstructor } from 'vue';

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
