import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import AdminLayout from '@/layouts/AdminLayout.vue'
import TeacherLayout from '@/layouts/TeacherLayout.vue'

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
    path: '/student',
    name: 'Student',
    component: DefaultLayout,
    redirect: '/student/dashboard',
    children: [
      {
        path: '/student/dashboard',
        name: 'Student Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/student/my-courses',
        name: 'My Courses',
        redirect: '/student/my-courses/index',
        children: [
          {
            path: '/student/my-courses/index',
            name: 'All Course',
            component: () => import('@/views/Student/Courses/index.vue'),
          },
          {
            path: '/student/my-courses/details/:id',
            name: 'Course Details',
            props: true,
            component: () => import('@/views/Student/Courses/details.vue'),
          },
          {
            path: '/student/my-courses/chapters/:id',
            name: 'Course Chapter',
            props: true,
            component: () => import('@/views/Student/Courses/Chapters.vue'),
          },
          {
            path: '/student/my-courses/chats/:id',
            name: 'Course Chats',
            props: true,
            component: () => import('@/views/Student/Courses/ChatMeeting.vue'),
          },
        ],
      },
      {
        path: '/student/assignment',
        name: 'Student Assignment',
        component: () => import('@/views/Assignment.vue'),
      },
      {
        path: '/student/chat',
        name: 'Student Chat',
        component: () => import('@/views/Chat.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
      },
    ],
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: TeacherLayout,
    redirect: '/student/dashboard',
    children: [
      // {
      //   path: 'dashboard',
      //   name: 'Teacher Dashboard',
      //   component: () => import('@/views/Dashboard.vue'),
      // },
      // {
      //   path: 'my-classes',
      //   name: 'Teacher My Classes',
      //   component: () => import('@/views/Classes.vue'),
      // },
      // {
      //   path: 'personnel',
      //   name: 'Teacher Personnel',
      //   component: () => import('@/views/Classes.vue'),
      // },
      // {
      //   path: 'my-courses',
      //   name: 'Teacher Courses',
      //   redirect: 'my-courses/index',
      //   children: [
      //     {
      //       path: 'index',
      //       name: 'All Course',
      //       component: () => import('@/views/Student/Courses/index.vue'),
      //     },
      //     {
      //       path: 'details/:id',
      //       name: 'Course Details',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/details.vue'),
      //     },
      //     {
      //       path: 'chapters/:id',
      //       name: 'Course Chapter',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/Chapters.vue'),
      //     },
      //     {
      //       path: 'chapters/:id',
      //       name: 'Course Chapter',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/Chapters.vue'),
      //     },
      //     {
      //       path: 'chats/:id',
      //       name: 'Course Chats',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/ChatMeeting.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: 'assignment',
      //   name: 'Teacher Assignment',
      //   component: () => import('@/views/Assignment.vue'),
      // },
      // {
      //   path: 'chat',
      //   name: 'Chat',
      //   component: () => import('@/views/Chat.vue'),
      // },
      // {
      //   path: 'settings',
      //   name: 'Settings',
      //   component: () => import('@/views/Settings.vue'),
      // },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      // {
      //   path: 'dashboard',
      //   name: 'Dashboard',
      //   component: () => import('@/views/Dashboard.vue'),
      // },
      // {
      //   path: '/my-classes',
      //   name: 'My Classes',
      //   component: () => import('@/views/Classes.vue'),
      // },
      // {
      //   path: '/personnel',
      //   name: 'Personnel',
      //   component: () => import('@/views/Classes.vue'),
      // },
      // {
      //   path: '/my-courses',
      //   name: 'My Courses',
      //   redirect: '/my-courses/index',
      //   children: [
      //     {
      //       path: 'index',
      //       name: 'All Course',
      //       component: () => import('@/views/Student/Courses/index.vue'),
      //     },
      //     {
      //       path: 'details/:id',
      //       name: 'Course Details',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/details.vue'),
      //     },
      //     {
      //       path: 'chapters/:id',
      //       name: 'Course Chapter',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/Chapters.vue'),
      //     },
      //     {
      //       path: 'chapters/:id',
      //       name: 'Course Chapter',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/Chapters.vue'),
      //     },
      //     {
      //       path: 'chats/:id',
      //       name: 'Course Chats',
      //       props: true,
      //       component: () => import('@/views/Student/Courses/ChatMeeting.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: '/assignment',
      //   name: 'Assignment',
      //   component: () => import('@/views/Assignment.vue'),
      // },
      // {
      //   path: '/chat',
      //   name: 'Chat',
      //   component: () => import('@/views/Chat.vue'),
      // },
      // {
      //   path: '/settings',
      //   name: 'Settings',
      //   component: () => import('@/views/Settings.vue'),
      // },
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
