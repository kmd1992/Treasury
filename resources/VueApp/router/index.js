import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../view/auth/Register.vue';
import Login from '../view/auth/Login.vue';
import Dashboard from '../view/user/Dashboard.vue'
import AdminDashboard from '../view/admin/Dashboard.vue'
import NotFound from '../view/partials/404.vue';

Vue.use(VueRouter)

// Routes
const routes = [
    {
      path: '/',
      name: 'home',
      redirect: '/admin'
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    // USER ROUTES
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    // ADMIN ROUTES
    {
      path: '/admin',
      name: 'admin.dashboard',
      component: AdminDashboard,
      meta: {
        auth: {
          roles: '-1',
          redirect: {
            name: 'login'
          }, 
          forbiddenRedirect: '/403'
        }
      }
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
      meta: {
        redirect: '/404',
        hideNavigation: true
      }
    },
    /* {
      path: '/lavori/:lavoro',
      name: 'lavoro',
      component: Lavoro,
      beforeEnter: (to, from, next) => {
       function isValid (param) {
          // check if param is valid
       }
    
        if (!isValid(to.params.lavoro)) {
          next({ name: 'not-found' });
        }
    
        next();
      }
    }, */
  ];

const router = new VueRouter({
    history: true,
    linkActiveClass: 'is-active',
    base: __dirname,
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    routes,
});
export default router