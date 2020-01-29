import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OrderEditor from "../views/OrderEditor";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: "/order/editor",
        name: "OrderEditor",
        component: OrderEditor
    }
];

export default new VueRouter({routes});
