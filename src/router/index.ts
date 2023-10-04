import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import { ROOT, EMPLOYEES, MANAGE, CLIENTS, PROJECTS, ROLES } from '../shared/lib/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROOT,
      component: ProjectsView
    },
    {
      path: EMPLOYEES,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EmployeesView.vue')
    },
    {
      path: MANAGE,
      component: () => import('../views/ManageView.vue'),
      children: [
        {
          path: `${EMPLOYEES.substring(1)}`,
          component: () => import('../views/ManageEmployeesView.vue')
        },
        {
          path: `${PROJECTS.substring(1)}`,
          component: () => import('../views/ManageProjectsView.vue')
        },
        {
          path: `${CLIENTS.substring(1)}`,
          component: () => import('../views/ManageClientsView.vue')
        },
        {
          path: `${ROLES.substring(1)}`,
          component: () => import('../views/ManageRolesView.vue')
        }
      ]
    }
  ]
})

export default router
