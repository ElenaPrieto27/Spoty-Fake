import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Pages
import Login from './views/Login'
import Logout from './views/Logout'
import Main from './views/Main'

// Routes
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/',
            name: 'spotify',
            component: Main,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '*',
            redirect: '/login',
        },
    ],
});

export default router
