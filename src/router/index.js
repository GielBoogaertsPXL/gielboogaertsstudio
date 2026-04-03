import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/WorkView.vue'),
    },
    {
      path: '/microtype',
      name: 'microtype',
      component: () => import('@/views/projects/ProjectMicrotype.vue'),
    },
    {
      path: '/jumbledscript',
      name: 'jumbledscript',
      component: () => import('@/views/projects/ProjectJumbledScript.vue'),
    },
    {
      path: '/eopa',
      name: 'eopa',
      component: () => import('@/views/projects/ProjectEOPA.vue'),
    },
    {
      path: '/typeinterplay',
      name: 'typeinterplay',
      component: () => import('@/views/projects/ProjectTypeInterPlay.vue'),
    },
    {
      path: '/virgajesse',
      name: 'virgajessse',
      component: () => import('@/views/projects/ProjectVirgaJesse.vue'),
    },
    {
      path: '/enzomari',
      name: 'enzomari',
      component: () => import('@/views/projects/ProjectEnzoMari.vue'),
    },
    {
      path: '/archetype',
      name: 'archetype',
      component: () => import('@/views/projects/ProjectArchetype.vue'),
    },
    {
      path: '/paa',
      name: 'paa',
      component: () => import('@/views/projects/ProjectPAA.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/projects/ProjectDashboard.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
})

export default router
