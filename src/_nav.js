export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavTitle',
    name: 'Options',
  },
  {
    component: 'CNavItem',
    name: 'My Classes',
    to: '/dashboard/my-classes',
    icon: 'cil-school',
  },
  {
    component: 'CNavItem',
    name: 'My Courses',
    to: '/dashboard/my-courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Assignment',
    to: '/dashboard/assignment',
    icon: 'cil-layers',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: '/dashboard/chat',
    icon: 'cil-speech',
  },
  {
    component: 'CNavItem',
    name: 'Assistant',
    to: '/dashboard/bot',
    icon: 'cib-probot',
  },
  {
    component: 'CNavTitle',
    name: 'Profile',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: '/dashboard/settings',
    icon: 'cil-settings',
  },
  {
    component: 'CNavItem',
    name: 'Logout',
    to: '/pages/login',
    icon: 'cil-power-standby',
  },
]
