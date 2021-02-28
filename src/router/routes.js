
const routes = [
  {
    path: '/2',
    component: () => import('pages/Index2.vue')
  },
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
