import Vue from "vue";
import Router from "vue-router";
import shoesLayout from "../layout/shoesLayout.vue"
import Home from "../page/home.vue"
import Product from "../page/product.vue"
import Contact from "../page/contact.vue"
import Introduce from "../page/introduce.vue"
import ProductDetail from "../page/productDetail.vue"
Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'shoesLayout',
            component: shoesLayout,
            children: [
                {
                    path:'/home',
                    name:'Home',
                    component:Home

                },
                {
                    path:'/products',
                    name:'Product',
                    component: Product
                },
                {
                    path: '/productDetail',
                    name : 'Detail',
                    component: ProductDetail
                },
                {
                    path:'/contact',
                    name:'Contact',
                    component:Contact
                },
                {
                    path:'/introduce',
                    name:'Introduce',
                    component:Introduce
                }
            ]
        },
    ]
});
export default router;