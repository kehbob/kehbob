import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/Intro.vue'),
    }, {
      path: '/main',
      component: () => import('@/components/Main.vue'),
    }, {
      path: '/Profile',
      component: () => import('@/components/Profile.vue'),
    },

    {
      path: '/',
      redirect: '/',
    }
  ]
})