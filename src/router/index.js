
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import { useGameStore } from '@/stores/game'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name:'Home',component:HomeView},
    //lazy load
    {path: '/Game', name:'Game', component: () => import('@/views/GameView.vue')},
    {path: '/Ranking', name: 'Ranking', component: () => import('@/views/RankingView.vue')},
    {path: '/Playing', name: 'Playing', component: () => import('@/views/PlayingView.vue'), meta: {requiresName: true}}

  ],
})




//no permitir ir a /Playing
router.beforeEach((to) => {
  if(to.meta.requiresName){
    const game = useGameStore()
    if(!game.username){
      return {name: 'Game'}
    }

  }
})

export default router
