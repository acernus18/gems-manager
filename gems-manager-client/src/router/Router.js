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
        path: "/order/editor",
        name: "OrderEditor",
        component: () => import("../views/orders/EditOrder"),
    },
    {
        path: "/sales/search",
        name: "SalesSearch",
        component: () => import("../views/sales/SearchSales"),
    }
];

export default new VueRouter({routes});
