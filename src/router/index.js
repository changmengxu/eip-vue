import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Cable from '../views/cable/busData.vue'
import Demo1 from '../views/demo/demo1.vue'
import Demo2 from '../views/demo/demo2.vue'
import Demo3 from '../views/demo/demo3.vue'
import Demo4 from '../views/demo/demo4.vue'
import Demo5 from '../views/demo/demo5.vue'
import Test3 from '../views/test/test3.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: '/homepage/cable',
        name: 'cable',
        component: Cable
      },
      {
        path: '/homepage/demo1',
        name: 'demo1',
        component: Demo1
      },
      {
        path: '/homepage/demo2',
        name: 'demo2',
        component: Demo2
      },
      {
        path: '/homepage/demo3',
        name: 'demo3',
        component: Demo3
      },
      {
        path: '/homepage/demo4',
        name: 'demo4',
        component: Demo4
      },
      {
        path: '/homepage/demo5',
        name: 'demo5',
        component: Demo5
      }
    ]
  },
  {
    path: '/test3',
    name: 'test3',
    component: Test3
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
