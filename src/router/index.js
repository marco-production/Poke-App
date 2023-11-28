import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import PokemonTypes from '../views/PokemonTypes.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: "MainLayout" }
  },
  {
    path: '/types',
    name: 'pokemon-types',
    component: PokemonTypes,
    meta: { layout: "MainLayout" }
  },
  {
    path: '/:id',
    name: 'pokemon-details',
    component: PokemonDetails,
    meta: { layout: "MainLayout" }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
