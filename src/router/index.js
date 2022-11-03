import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/pages/home',
    children: [
      {
        path: '/get-started',
        name: 'Get Started',
        component: () => import('@/views/GetStarted.vue'),
      },
      {
        path: '/beta-installer',
        name: 'Beta Installer',
        meta: { requiresAuth: true },
        component: () => import('@/views/BetaInstaller.vue'),
      },
      {
        path: '/bot-installer',
        name: 'Bot Installer',
        meta: { requiresAuth: true },
        component: () => import('@/views/BotInstaller.vue'),
      },
      {
        path: '/buy-license',
        name: 'Buy License',
        meta: { requiresAuth: true },
        component: () => import('@/views/BuyLicense.vue'),
      },
      {
        path: '/my-license',
        name: 'My License',
        meta: { requiresAuth: true },
        component: () => import('@/views/MyLicense.vue'),
      },
      {
        path: '/renew-license',
        name: 'Renew License',
        meta: { requiresAuth: true },
        component: () => import('@/views/RenewLicense.vue'),
      },
      {
        path: '/auto-renew-license',
        name: 'Auto Renew License',
        meta: { requiresAuth: true },
        component: () => import('@/views/AutoRenewLicense.vue'),
      },
      {
        path: '/my-invoice',
        name: 'My Invoice',
        meta: { requiresAuth: true },
        component: () => import('@/views/MyInvoice.vue'),
      },
      {
        path: '/my-wallet',
        name: 'My Wallet',
        meta: { requiresAuth: true },
        component: () => import('@/views/MyWallet.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        meta: { requiresAuth: true },
        component: () => import('@/views/Profile.vue'),
      },
      // admin features
      {
        path: '/user-manager',
        name: 'User Manager',
        meta: { requiresAuth: true },
        component: () => import('@/views/admin/UserManager.vue'),
      },
      {
        path: '/license-manager',
        name: 'License Manager',
        meta: { requiresAuth: true },
        component: () => import('@/views/admin/LicenseManager.vue'),
      },
      {
        path: '/invoice-manager',
        name: 'Invoice Manager',
        meta: { requiresAuth: true },
        component: () => import('@/views/admin/InvoiceManager.vue'),
      },
      {
        path: '/send-notify',
        name: 'Send Notify',
        meta: { requiresAuth: true },
        component: () => import('@/views/admin/SendNotify.vue'),
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
        path: 'home',
        name: 'Web DiceBot',
        component: () => import('@/views/pages/Home'),
      },
      {
        path: '404',
        name: 'Page not found!',
        component: () => import('@/views/pages/404'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'logout',
        name: 'Goodbye!',
        component: () => import('@/views/pages/Logout'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/pages/404' },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  const token = localStorage.getItem('token') || null
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) next({ path: '/pages/login' })
  }
  next()
})

export default router
