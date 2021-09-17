import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import LandingPage from "@/features/landing-page/LandingPage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: LandingPage, // Default route to Scada
  },
]

const router = new VueRouter({
  base: process.env.VUE_APP_BASE_HREF,
  routes,
  mode: 'history'
})

export default router
