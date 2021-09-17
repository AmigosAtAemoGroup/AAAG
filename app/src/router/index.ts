import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingPage from "@/features/landing-page/LandingPage.vue";
import CreateEvent from "@/features/create-event/CreateEvent.vue";
import ViewEvent from "@/features/view-event/ViewEvent.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: LandingPage, // Default route to Scada
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    component: CreateEvent, // Default route to Scada
  },
  {
    path: '/view-event/:id',
    name: 'ViewEvent',
    component: ViewEvent, // Default route to Scada
  },
]

const router = new VueRouter({
  base: process.env.VUE_APP_BASE_HREF,
  routes,
  mode: 'history'
})

export default router
