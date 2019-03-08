/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import router from './routes.js'
import store from './store.js'

export const EventBus = new Vue();
new Vue({
    router,
    store
}).$mount('#app');