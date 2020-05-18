import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import store from './vuex'
import App from './App.vue'
import router from './routes'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyDhJnviZj_q4NE1eDPAkeWv4cb1WJG4ZRU",
  authDomain: "attendance-20d3f.firebaseapp.com",
  databaseURL: "https://attendance-20d3f.firebaseio.com",
  projectId: "attendance-20d3f",
  storageBucket: "attendance-20d3f.appspot.com",
  messagingSenderId: "177024607576",
  appId: "1:177024607576:web:1ee40f7439a77464d2b12d"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

