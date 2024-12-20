import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favorites from '@/views/Favorites.vue'
import Profile from '@/views/Profile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites,  
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile, 
      },
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active'
})


export default router
