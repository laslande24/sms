const nav = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'primary',
    //   text: 'NEW',
    // },
  },
  {
    component: 'CNavItem',
    name: 'My Classes',
    to: '/my-classes',
    icon: 'cil-school',
  },
  {
    component: 'CNavItem',
    name: 'My Courses',
    to: '/my-courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Assignment',
    to: '/Assignment',
    icon: 'cil-layers',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: '/Chat',
    icon: 'cil-speech',
  },
  {
    component: 'CNavTitle',
    name: 'Profile',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: '/Settings',
    icon: 'cil-settings',
  },
  {
    component: 'CNavItem',
    name: 'Logout',
    to: '/pages/login',
    icon: 'cil-power-standby',
  },
]

const navStudent = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/student/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'primary',
    //   text: 'NEW',
    // },
  },
  {
    component: 'CNavItem',
    name: 'My Courses',
    to: '/student/my-courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Assignment',
    to: '/student/Assignment',
    icon: 'cil-layers',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: '/student/Chat',
    icon: 'cil-speech',
  },
  {
    component: 'CNavItem',
    name: 'Assistant',
    to: '/student/assistant',
    icon: 'cib-probot',
  },
  {
    component: 'CNavItem',
    name: 'Exams',
    to: '/student/my-exam',
    icon: 'cil-speech',
  },
  {
    component: 'CNavTitle',
    name: 'Profile',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: 'Settings',
    icon: 'cil-settings',
  },
  {
    component: 'CNavItem',
    name: 'Logout',
    to: '/pages/login',
    icon: 'cil-power-standby',
  },
]

const navTeacher = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'primary',
    //   text: 'NEW',
    // },
  },
  {
    component: 'CNavItem',
    name: 'My Classes',
    to: 'my-classes',
    icon: 'cil-school',
  },
  {
    component: 'CNavItem',
    name: 'My Courses',
    to: 'my-courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Exams',
    to: 'Chat',
    icon: 'cil-speech',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: 'Chat',
    icon: 'cil-speech',
  },
  {
    component: 'CNavTitle',
    name: 'Profile',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: 'Settings',
    icon: 'cil-settings',
  },
  {
    component: 'CNavItem',
    name: 'Logout',
    to: '/pages/login',
    icon: 'cil-power-standby',
  },
]

const navAdmin = [
  {
    component: 'CNavItem',
    name: 'Admin Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'primary',
    //   text: 'NEW',
    // },
  },
  {
    component: 'CNavItem',
    name: 'Personnels',
    to: '/admin/personnel',
    icon: 'cil-people',
  },
  {
    component: 'CNavItem',
    name: 'Classes',
    to: '/admin/class',
    icon: 'cil-library',
  },
  {
    component: 'CNavItem',
    name: 'Student',
    to: '/admin/students',
    icon: 'cil-education',
  },
  {
    component: 'CNavItem',
    name: 'Courses',
    to: 'admin/my-courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Exam',
    to: 'Assignment',
    icon: 'cil-layers',
  },
  {
    component: 'CNavItem',
    name: 'Student',
    to: '/admin/students',
    icon: 'cil-education',
  },
  {
    component: 'CNavItem',
    name: 'School Setting',
    to: 'School Setting',
    icon: 'cil-settings',
  },
  {
    component: 'CNavTitle',
    name: 'Profile',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: 'Settings',
    icon: 'cil-settings',
  },
  {
    component: 'CNavItem',
    name: 'Logout',
    to: '/pages/login',
    icon: 'cil-power-standby',
  },
]
export { nav, navStudent, navAdmin, navTeacher }
