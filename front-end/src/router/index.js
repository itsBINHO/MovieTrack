import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Cadastro from '@/components/TelaCadastro.vue'

const routes = [
   {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/',
    redirect: '/Login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
