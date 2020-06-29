import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      path: '/news',
      name: 'news',
      meta: {layout: 'main'},
      component: () => import('@/views/News.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/app',
      name: 'app',
      meta: {layout: 'main'},
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '',
      meta: {layout: 'empty'},
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('@/views/Register.vue')
    }
  ],
  mode: 'history'
})
