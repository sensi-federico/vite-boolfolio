import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import SinglePageView from './views/SinglePageView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/show/:slug',
            name: 'single-page',
            component: SinglePageView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },
    ]
})

export { router }