
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('pages/Index.vue')
  },

  {
    path: '/chamados',
    name: 'Chamados',
    component: () => import('pages/chamados.vue')
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/home.vue')
  },

  {
    path: '/responderChamado',
    name: 'ResponderChamado',
    component: () => import('pages/msgChamado.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
