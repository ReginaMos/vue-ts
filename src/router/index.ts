import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainContent from '@/components/MainContent.vue'
import TableComponent from '@/components/TableComponent.vue'
import BillsComponent from '@/components/BillsComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import RegisterComponent from '@/components/RegisterComponent.vue'
import UsersComponent from '@/components/UsersComponent.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        component: MainContent
      },
      {
        path: '/table',
        component: TableComponent
      },
      {
        path: '/bills',
        component: BillsComponent
      },
      {
        path: '/users',
        component: UsersComponent
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
