import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/counter',
        name: 'counter',
        component: () =>
            import ( /* webpackChunkName: "counter" */ '../views/CounterView.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () =>
            import ( /* webpackChunkName: "counter" */ '../views/TodoView.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () =>
            import ( /* webpackChunkName: "counter" */ '../views/UsersView.vue')
    },
    {
        path: '/pokemon-search',
        name: 'pokemon-search',
        component: () =>
            import ( /* webpackChunkName: "counter" */ '../views/SearchPokemon.vue')
    }, {
        path: '/pokemon/:id',
        name: 'pokemon-id',
        component: () =>
            import ( /* webpackChunkName: "counter" */ '../views/Pokemon.vue')
    }, {
        path: '/custom-slot',
        name: 'c-slot',
        component: () =>
            import ( /* webpackChunkName: "custom Slot" */ '../views/CustomSlots.vue')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router