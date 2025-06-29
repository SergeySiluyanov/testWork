import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'template',
      component: () => import('../views/Template/TemplateList.vue'),
      children: [
        {
          name: 'templateItem',
          path: '/template/:id',
          component: () => import('../views/Template/TemplateCanvasItem.vue'),
        },
      ],
    },
  ],
})

export default router
