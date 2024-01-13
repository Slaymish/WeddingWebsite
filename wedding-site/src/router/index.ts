import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      // Load the RSVPView component asynchronously
      component: () => import('../views/RSVPView.vue')
    },
    {
      path: '/attending',
      name: 'attending',
      component: () => import('../views/AttendingView.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    }
  ]
})

export default router
