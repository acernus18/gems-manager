import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/Home"),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("../views/About"),
    },
    {
        path: "/order/editor",
        name: "OrderEditor",
        component: () => import("../views/orders/OrderEditor"),
    },
    {
        path: "/sales/search",
        name: "SalesSearch",
        component: () => import("../views/sales/SalesSearch"),
    }
];

export default new VueRouter({routes});
