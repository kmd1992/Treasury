import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../view/auth/Register.vue';
import Login from '../view/auth/Login.vue';
import Calendar from '../view/calendar/Home.vue';
import AdminDashboard from '../view/admin/Dashboard.vue'
import NotFound from '../view/partials/404.vue';
import Client from '../view/clients/Home.vue';
import ClientStore from '../view/clients/Store.vue';
import ClientProfile from '../view/clients/Profile.vue';
import LoanSummary from '../view/loan_summary/Home.vue';
import LoanReport from '../view/reports/Home.vue';

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
    // CALENDAR ROUTES
    {
        path: '/calendar',
        name: 'calendar',
        component: Calendar,
        meta: {
            auth: true
        }
    },
    // CLIENT ROUTES
    {
        path: '/client',
        name: 'client',
        component: Client,
        meta: {
            auth: true
        }
    },
    {
        path: '/client/store',
        name: 'client_store',
        component: ClientStore,
        meta: {
            auth: true
        }
    },
    {
        path: '/client/profile/:id',
        name: 'client_profile',
        component: ClientProfile,
        meta: {
            auth: true
        }
    },
    // Loan summary
    {
        path: '/loan_summary',
        name: 'loan_summary',
        component: LoanSummary,
        meta: {
            auth: true
        }
    },
    {
        path: '/report',
        name: 'report',
        component: LoanReport,
        meta: {
            auth: true
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