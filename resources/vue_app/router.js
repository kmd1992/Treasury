import VueRouter from 'vue-router'
import Home from './app/Home';
import Register from './app/module/auth/Register';
import Login from './app/module/auth/Login';
//import Dashboard from './app/module/dashboard/Dashboard';
import Dashboard from './app/module/user/Dashboard'
import AdminDashboard from './app/module/admin/Dashboard'
import NotFound from './app/_partials/404';

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
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
export default router