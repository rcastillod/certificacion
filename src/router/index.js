import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VinosView from '../views/VinosView.vue'
import PromocionesView from '../views/PromocionesView.vue'
import AccesoriosView from '../views/AccesoriosView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vinos',
    name: 'vinos',
    component: VinosView,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: ConfirmationView,
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: PromocionesView,
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: AccesoriosView,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
