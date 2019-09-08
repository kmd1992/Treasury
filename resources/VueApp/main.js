import Vue from 'vue';
import 'es6-promise/auto';
import axios from 'axios';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';

import Conf from './config/app.config.js';
import auth from './config/app.auth';
import router from './router/index';
import store from './vuex/store';

import AppLayout from './view/app.vue';
import { sync } from 'vuex-router-sync';

import FullCalendar from 'vue-full-calendar';
Vue.use(FullCalendar)

const VueClazyLoad = require('vue-clazy-load')
sync(store, router);
Vue.use(VueClazyLoad);

window.Vue = Vue;
Vue.config.devtools = true;
Vue.config.performance = true;

// Set Vue router
Vue.router = router;

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = Conf.appDomain;
Vue.use(VueAuth, auth);

// Load App
const app = new Vue({
    el: '#app',
    router,
    store,
    ...AppLayout
})
export { app, router, store }
  