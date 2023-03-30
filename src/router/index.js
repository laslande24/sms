import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import AdminLayout from '@/layouts/AdminLayout.vue'
import TeacherLayout from '@/layouts/TeacherLayout.vue'
import GuestLayout from '@/layouts/GuestLayout'
//import jwtDecode from 'jwt-decode'
// function isAuthenticated() {
//   const token = localStorage.getItem('token')
//   console.log(token)
//   if (token) {
//     // Decode the token and check if it is still valid
//     // You can use a library like jwt-decode to decode JWT tokens
//     const decodedToken = jwtDecode(token)
//     const currentTime = Date.now() / 1000 // convert milliseconds to seconds
//     if (decodedToken.exp > currentTime) {
//       return true
//     } else {
//       // Token has expired
//       localStorage.removeItem('auth_token')
//       return false
//     }
//   } else {
//     // No token found
//     return false
//   }
// }

// function isTeacherAuthenticated() {
//   const token = localStorage.getItem('auth_token')
//   if (token) {
//     // Decode the token and check if it is still valid
//     // You can use a library like jwt-decode to decode JWT tokens
//     const decodedToken = jwtDecode(token)
//     console.log(decodedToken)
//     const currentTime = Date.now() / 1000 // convert milliseconds to seconds
//     if (decodedToken.exp > currentTime) {
//       if (decodedToken.is_teacher) {
//         return true
//       }
//       return false
//     } else {
//       // Token has expired
//       localStorage.removeItem('auth_token')
//       return false
//     }
//   } else {
//     // No token found
//     return false
//   }
// }

// function isAdminAuthenticated() {
//   const token = localStorage.getItem('auth_token')
//   if (token) {
//     // Decode the token and check if it is still valid
//     // You can use a library like jwt-decode to decode JWT tokens
//     const decodedToken = jwtDecode(token)
//     const currentTime = Date.now() / 1000 // convert milliseconds to seconds
//     if (decodedToken.exp > currentTime) {
//       if (decodedToken.is_teacher) {
//         return true
//       }
//       return false
//     } else {
//       // Token has expired
//       localStorage.removeItem('auth_token')
//       return false
//     }
//   } else {
//     // No token found
//     return false
//   }
// }

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
    path: '/school',
    name: 'School',
    component: () => import('@/views/SchoolForm.vue'),
  },
  {
    path: '/take-exam/:id',
    name: 'Take Exam',
    props: true,
    component: () => import('@/views/Student/Exam/TakeExam.vue'),
  },
  {
    path: '/student',
    name: 'Student',
    component: DefaultLayout,
    redirect: '/student/my-courses',
    // beforeEnter: (to, from, next) => {
    //   if (isAuthenticated()) {
    //     next()
    //   } else {
    //     next({ name: 'LandingPage' })
    //   }
    // },
    children: [
      {
        path: '/student/dashboard',
        name: 'Student Dashboard',
        component: () => import('@/views/Student/Dashboard.vue'),
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
          {
            path: '/student/my-courses/meet/:id',
            name: 'Course Meet',
            props: true,
            component: () => import('@/views/Student/Chats/Meet.vue'),
          },
          {
            path: '/student/my-courses/translate',
            name: 'Student Translations',
            props: true,
            component: () => import('@/views/Student/Translation.vue'),
          },
          {
            path: '/student/my-courses/practicals/:id',
            name: 'Course Practicals',
            props: true,
            component: () => import('@/views/Student/Courses/Practicals.vue'),
          },
          {
            path: '/student/my-courses/media/:id',
            name: 'Media',
            props: true,
            component: () => import('@/views/Student/Courses/Media.vue'),
          },
        ],
      },
      {
        path: '/student/assignment',
        name: 'Student Assignment',
        component: () => import('@/views/Student/Assignment.vue'),
      },
      {
        path: '/student/weakness',
        name: 'Student weakness',
        component: () => import('@/views/Student/Weakness.vue'),
      },
      {
        path: '/student/transcript',
        name: 'Student transcript',
        component: () => import('@/views/Student/Exam/Transcript.vue'),
      },
      {
        path: '/student/chat',
        name: 'Student Chat',
        component: () => import('@/views/Chat.vue'),
      },
      {
        path: '/student/assistant',
        name: 'Assistant',
        component: () => import('@/views/Chatbot.vue'),
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/Account.vue'),
      },
      {
        path: '/student/settings',
        name: 'Student Settings',
        component: () => import('@/views/Settings.vue'),
      },
      {
        path: '/student/my-exam',
        name: 'My Exam',
        redirect: '/student/my-exam/index',
        children: [
          {
            path: '/student/my-exam/index',
            name: 'My Exams',
            component: () => import('@/views/Student/Exam/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: TeacherLayout,
    redirect: '/teacher/dashboard',
    // beforeEnter: (to, from, next) => {
    //   if (isTeacherAuthenticated()) {
    //     next()
    //   } else {
    //     next({ name: 'LandingPage' })
    //   }
    // },
    children: [
      {
        path: 'dashboard',
        name: 'Teacher Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'my-classes',
        name: 'Teacher My Classes',
        component: () => import('@/views/Classes.vue'),
      },
      {
        path: '/teacher/exam',
        name: 'Teacher Exam',
        component: () => import('@/views/Teacher/Exams/index.vue'),
      },
      {
        path: '/teacher/my-courses',
        name: 'Teacher Courses',
        redirect: '/teacher/my-courses/index',
        children: [
          {
            path: '/teacher/my-courses/index',
            name: 'Teacher Course',
            component: () => import('@/views/Teacher/Courses/index.vue'),
          },
          {
            path: '/teacher/my-courses/details/:id',
            name: 'Teacher Course Details',
            props: true,
            component: () => import('@/views/Teacher/Courses/details.vue'),
          },
          {
            path: '/teacher/my-courses/chapters/:id',
            name: 'Teacher Courser Chapter',
            props: true,
            component: () => import('@/views/Teacher/Courses/Chapters.vue'),
          },
          {
            path: '/teacher/my-courses/chats/:id',
            name: 'Teacher Chats',
            props: true,
            component: () => import('@/views/Teacher/Courses/ChatMeeting.vue'),
          },
          {
            path: '/teacher/my-courses/meet/:id/:topic',
            name: 'Teacher Meet',
            props: true,
            component: () => import('@/views/Teacher/Chats/Meet.vue'),
          },
          {
            path: '/teacher/my-courses/practicals/:id',
            name: 'Teacher Practicals',
            props: true,
            component: () => import('@/views/Teacher/Courses/Practicals.vue'),
          },
          {
            path: '/teacher/my-courses/media/:id',
            name: 'Media',
            props: true,
            component: () => import('@/views/Teacher/Courses/Media.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    // beforeEnter: (to, from, next) => {
    //   if (isAdminAuthenticated()) {
    //     next()
    //   } else {
    //     next({ name: 'LandingPage' })
    //   }
    // },
    children: [
      {
        path: 'dashboard',
        name: 'Admin Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'students',
        name: 'My Students',
        component: () => import('@/views/Student.vue'),
      },
      {
        path: 'personnel',
        name: 'Personnel',
        component: () => import('@/views/Personnels.vue'),
      },
      {
        path: 'my-classes',
        name: 'My Classes',
        component: () => import('@/views/Classes.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
      },
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
