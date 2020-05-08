import { RouteConfig } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue'
import Index from 'pages/Index.vue';
import Disease from 'pages/Disease.vue';
import User from 'pages/User.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: 'diseases',
        component: Disease,
        props: true,
        children: [
          {
            path: 'data',
            component: () => import('pages/disease/Data.vue')
          },
          {
            path: 'trackNew',
            component: () => import('pages/disease/TrackNew.vue')
          }
        ]
      },
      {
        path: 'user',
        component: User,
        props: true,
        children: [
          {
            path: 'selfReport',
            component: () => import('pages/user/SelfReport.vue')
          },
          {
            path: 'iotConnect',
            component: () => import('pages/user/IoTConnect.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'login',
            component: () => import('pages/Login.vue'),
            alias: '/login'
          }
        ]
      },
      {
        path: 'login',
        alias: '/user/login'
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
