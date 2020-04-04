import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import MineRouter from './mine'
import CinemaRouter from './cinema'

Vue.use(VueRouter)

const routes = [
  MovieRouter,
  MineRouter,
  CinemaRouter,
  {
    // /*代表所有找不到的路由都跳转到movie
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
