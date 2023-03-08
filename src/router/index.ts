import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
let routes:Array<RouteRecordRaw> = [
    {
      path:'/',
      component:()=> import("../pages/Home/Home.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import("../pages/Home/Home.vue"),
    },
    {
       path: '/about',
       component: ()=> import("../pages/About/About.vue")
    },
    {
       path: '/list',
       component: ()=> import("../pages/List/List.vue")
    },
]
let router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      //始终滚动到顶部
      return { 
        top: 0,
        behavior: 'smooth',
      }
    }
});
export default router; 