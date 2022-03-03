import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import children from "pages-generated"; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children
    // children: [
    //   {
    //     path: 'dashboard',
    //     name: 'Dashboard',
    //     component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    //     meta: {
    //       title: 'Dashboard'
    //     }
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router