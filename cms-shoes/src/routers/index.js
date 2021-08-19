import Vue from "vue";
import Router from "vue-router";
import LayoutShoes from "../layout/shoesLayout"
import Login from "../components/login/login"
import Dashboard from "../page/dashboard.vue"
import Product from "../page/product/products.vue"
import AddProduct from "../page/product/add-product"
import EditProduct from "../page/product/edit-product"
import Category from "../page/category/categorys"
import Customers from "../page/customer/customers"
import Oders from "../page/oder/oders"

//admin


Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "Login",
            component: Login,

        },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'shoesLayout',
            component: LayoutShoes,
            children: [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: Dashboard,

                },
                {
                    path: "/products",
                    name: "Product",
                    component: Product,

                },
                {
                    path: "/add-product",
                    name: "AddProduct",
                    component: AddProduct,

                },
                {
                    path: "/edit-product",
                    name: "EditProduct",
                    component: EditProduct,

                },
                {
                    path: "/categorys",
                    name: "Category",
                    component: Category,

                },
                {
                    path: "/customers",
                    name: "Customer",
                    component: Customers,

                },
                {
                    path:"oders",
                    name:"Oder",
                    component: Oders
                }
            ]
        },
        
        

    ]
});
export default router;