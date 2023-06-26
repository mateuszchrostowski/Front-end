import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/dynComponents',
      name: 'dyn components',
      component: () => import('../views/DynamicComponents.vue')
    },
    {
      path: '/clicker',
      name: 'clicker',
      component: () => import('../views/ClickerView.vue')
    }
  ]
})

export default router
