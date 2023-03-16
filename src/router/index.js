import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import GuestLayout from '@/layouts/GuestLayout'
import DefaultLayout from '@/layouts/DefaultLayout'

//route index
const routes = [
  {
    path: '/',
    name: 'Guest',
    component: GuestLayout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'LandingPage',
        component: () => import('@/views/guest/LandingPage.vue'),
      },
      {
        path: 'about',
        name: 'AboutPage',
        component: () => import('@/views/guest/AboutPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'my-classes',
        name: 'My Classes',
        component: () => import('@/views/Classes.vue'),
      },
      {
        path: 'my-courses',
        name: 'My Courses',
        component: () => import('@/views/Courses.vue'),
      },
      {
        path: 'assignment',
        name: 'Assignment',
        component: () => import('@/views/Assignment.vue'),
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue'),
      },
      {
        path: 'bot',
        name: 'Assistant',
        component: () => import('@/views/Chatbot.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
