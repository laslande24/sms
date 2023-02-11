export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Options',
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
    name: 'Assignment',
    to: 'Assignment',
    icon: 'cil-layers',
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
