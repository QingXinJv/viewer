import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Videos from '../views/Videos.vue'
import VidCollection from '../views/VidCollection.vue'
import VidPlayer from '../views/VidPlayer.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/VidCollection',
    name: 'VidCollection',
    component: VidCollection
  },
  {
    path: '/VidPlayer/:videoId',
    name: 'VidPlayer',
    component: VidPlayer
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
