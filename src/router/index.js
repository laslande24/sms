import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
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
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/my-classes',
        name: 'My Classes',
        component: () => import('@/views/Classes.vue'),
      },
      {
        path: '/personnel',
        name: 'Personnel',
        component: () => import('@/views/Classes.vue'),
      },
      {
        path: '/my-courses',
        name: 'My Courses',
        redirect: '/my-courses/index',
        children: [
          {
            path: 'index',
            name: 'All Course',
            component: () => import('@/views/Student/Courses/index.vue'),
          },
          {
            path: 'details/:id',
            name: 'Course Details',
            props: true,
            component: () => import('@/views/Student/Courses/details.vue'),
          },
        ],
      },
      {
        path: '/assignment',
        name: 'Assignment',
        component: () => import('@/views/Assignment.vue'),
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue'),
      },
      {
        path: '/settings',
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
