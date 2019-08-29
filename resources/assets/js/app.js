
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import App from './App.vue';
//import router from './router' //this will import router/index.js

window.Vue = Vue;
Vue.config.devtools = true;
Vue.config.performance = true;

new Vue({
  el: '#app',
  template: '<App/>',
  //router,
  components: { App },
  render: h => h(App)
});