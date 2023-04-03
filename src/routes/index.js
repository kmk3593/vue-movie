import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',    // URL에서 '#' 제거
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/components/LoginPage.vue'),
        },
        {
            path: '/main',
            component: () => import('@/components/MovieMain.vue'),
        },
        {
            path: '/manager',
            component: () => import('@/components/MovieManager.vue'),
        },
    ],
});