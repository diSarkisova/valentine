import {createWebHistory, createRouter, type RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[]= [
    {
        path: '/',
        component: ()=> import('../src/layout/DefaultLayout.vue'),
        name: 'DefaultLayout',
        children: [
            {
                path: '',
                component: ()=> import('../src/pages/MainPage.vue'),
                name: 'MainPage',
            },
            {
                path: 'yes',
                component: ()=> import('../src/pages/YesPage.vue'),
                name: 'YesPage',
            },
            {
                path: 'no', component: ()=> import('../src/pages/NoPage.vue'),name: 'NoPage',},
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})