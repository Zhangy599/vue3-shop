import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue'),
    name: 'Home'
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue'),
    name: 'Login',
    beforeEnter (to, from, next) {
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    component: () => import('../views/register/Register.vue'),
    name: 'Register',
    beforeEnter (to, from, next) {
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/shop/:id',
    component: () => import('../views/shop/Shop.vue'),
    name: 'Shop'
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin');
  (isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
