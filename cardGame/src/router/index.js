import { createRouter, createWebHistory } from 'vue-router'
import mainpage from "../components/mainpage.vue"
import login from "../components/login.vue"
import register from "../components/register.vue"
import download from "../components/download.vue"
import newsCard from "../components/newsCard.vue"
import newsRank from "../components/newsRank.vue"
import newsHero from "../components/newsHero.vue"
import modifyPassword from "../components/modifyPassword.vue"




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //主頁 http://localhost:5173/
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/login', //分頁 http://localhost:5173/login
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/newsCard',
      name: 'newsCard',
      component: newsCard
    },
    {
      path: '/newsRank',
      name: 'newsRank',
      component: newsRank
    },
    {
      path: '/newsHero',
      name: 'newsHero',
      component: newsHero
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: modifyPassword
    },
  ]
})

export default router
