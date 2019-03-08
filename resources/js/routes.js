/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*
    Extends Vue to use Vue Router
*/
Vue.use(VueRouter)

import Layout from './pages/Layout.vue'

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'layout',
        component: Layout,
    }]
});