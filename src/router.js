import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import S1 from './views/S1.vue'
import S2 from './views/S2.vue'
import S3 from './views/S3.vue'
import Beta from './views/Beta.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/s1',
      name: 's1',
      component: S1
    },
    {
      path: '/s2',
      name: 's2',
      component: S2
    },
    {
      path: '/s3',
      name: 's3',
      component: S3
    },
    {
      path: '/beta',
      name: 'beta',
      component: Beta
    }
  ]
})
