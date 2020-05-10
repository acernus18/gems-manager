import Vue from 'vue';
import VueRouter from 'vue-router';
import DataRequester from "../utilities/DataRequester";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/Home"),
    },
    {
        path: "/login",
        component: () => import("../views/Login"),
    },
    {
        path: "/order/editor",
        name: "OrderEditor",
        component: () => import("../views/orders/EditOrder"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/sales/search",
        name: "SalesSearch",
        component: () => import("../views/sales/SearchSales"),
    },
    {
        path: "/sales/import",
        name: "ImportSales",
        component: () => import("../views/sales/ImportSales"),
        meta: {
            requiresAuth: true,
        },
    }
];

const router = new VueRouter({routes});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let result = await DataRequester.Login();
        if (result.indexOf("administration") !== -1) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;
