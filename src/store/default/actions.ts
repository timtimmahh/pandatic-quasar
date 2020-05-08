import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { DefaultStateInterface } from './state';
import Vue from 'vue'

const actions: ActionTree<DefaultStateInterface, StoreInterface> = {
  loginUser ({ }, payload) {
    Vue.prototype.$fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then((response: any) => {
        console.log(response)
      })
      .catch((error: { message: any }) => {
        console.log(error.message)
      })
  },
  registerUser ({ }, payload) {
    Vue.prototype.$fireAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response: any) => {
        console.log(response)
        const userId = Vue.prototype.$fireAuth.currentUser.uid
        Vue.prototype.$fireDB.collection('users').doc(userId).set({
          name: payload.name,
          email: payload.email,
          online: true,
          devices: {}
        })
      })
      .catch((error: { message: any; }) => {
        console.log(error.message)
      })
    console.log('registerUser', payload)
  },
  handleAuthStateChanged ({ commit }) {
    Vue.prototype.$fireAuth.onAuthStateChanged(function(user: firebase.User) {
      if (user) {
        Vue.prototype.$fireDB.collection('users').doc(user.uid).get()
          .then((response: any) => {
            console.log(response)
          })
      }
    });
    console.log('handleAuthStateChanged')
  }
};

export default actions;
