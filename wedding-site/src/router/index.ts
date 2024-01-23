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
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/admin/attending',
      name: 'attending',
      component: () => import('../views/AttendingView.vue')
    },
    {
      path: '/admin/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page when navigating
    return { top: 0, behavior: 'instant' }
  }
})

export default router
