import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: () => import(/* webpackChunkName: "calculadora" */ '../views/calculadoraMasa/CalculadoraMasaView.vue')
  },
  {
    path: '/dieta',
    name: 'Dieta',
    component: () => import(/* webpackChunkName: "dieta" */ '../views/Dieta/DietaView.vue')
  },
  {
    path: '/nutrientes',
    name: 'Nutrientes',
    component: () => import(/* webpackChunkName: "nutrientes" */ '../views/IngestaNutrientes/IngestaNutrientes.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(
      /* webpackChunkName: "NotFoundPage"*/
      "../views/NotFound/NotFoundView.vue"
    )
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
