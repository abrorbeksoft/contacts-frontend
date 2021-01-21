import Vue from "vue"
import VueRouter from "vue-router"
import home from "@/components/home";
import login from "@/components/login";
import register from "@/components/register";
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:home,
            name:'home'
        },
        {
            path:'/login',
            component: login,
            name:'login',
        },
        {
            path: '/register',
            component: register,
            name: 'register'
        }
    ],
    mode:"history"
})



