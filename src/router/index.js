import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/HomeView.vue'
import Register from '../views/Register/RegisterView.vue';
import Login from '../views/Register/LoginView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
    path: '/heart',
    name: 'Heart',
    component: () => import(/* webpackChunkName: "heart" */ '../views/Heart/Heart.vue')
  },
  {
    path: '/indicadores',
    name: 'Indicadores',
    component: () => import(/* webpackChunkName: "indicadores" */ '../views/indicadores/IndicadoresView.vue')
  },
  {
    path: '/alimentos',
    name: 'Alimentos',
    component: () => import(/* webpackChunkName: "alimentos" */ '../views/Alimentos/AlimentosView.vue')
  },
  {
    path: '/actividades',
    name: 'Actividades',
    component: () => import(/* webpackChunkName: "actividades" */ '../views/Actividades/ActividadesView.vue')
  },
  {
    path: '/especialistas',
    name: 'Especialistas',
    component: () => import(/* webpackChunkName: "especialistas" */ '../views/Especialistas/EspecialistasView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs/aboutUsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(
      /* webpackChunkName: "NotFoundPage"*/
      "../views/NotFound/NotFoundView.vue"
    )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
