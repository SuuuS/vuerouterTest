
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//创建路由实例并配置路由映射
//path:'*',redirect:'/home' 重定向到path是/home的映射
const router = new VueRouter({
  routes: [
    {
    path: '/home', component:require('./components/home.vue'),
    children:[
      {
        path: '/',component:require('./view/list1.vue')
      },
      {
        path: '/list2',component:require('./view/list2.vue')
      }]
  },
  {
    path: '/about', component:require('./components/About.vue')
  },
  {
    path:'*', redirect:'/home'//默认显示的是home呗
  }]
})

export default router;
