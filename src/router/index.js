import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Register from '@/views/register/register'
import Home from '@/views/home/home'
import Test1 from '@/views/testpage/test1'
import Test2 from '@/views/testpage/test2'
import Test3 from '@/views/testpage/test3'
import Test4 from '@/views/testpage/test4'
import Test5 from '@/views/testpage/test5'
import Test6 from '@/views/testpage/test6'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:'/',
      name:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Home,
      children:[
        {
          path: 'test1',  //这里不能加'/'，否则跳转空白页
          name: 'test1',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test1
        },
        {
          path: 'test2',
          name: 'test2',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test2
        },
        {
          path: 'test3',
          name: 'test3',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test3
        },
        {
          path: 'test4',
          name: 'test4',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test4
        },
        {
          path: 'test5',
          name: 'test5',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test5
        },
        {
          path: 'test6',
          name: 'test6',
          meta:{
             requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
           },
          component: Test6
        }
      ]
    },
  ]
})

//登录拦截
router.beforeEach((to,from,next)=>{
    if(to.matched.length === 0) {
        //如果未匹配到路由
        from.name ? next({ name:from.name }) : next('/');
        //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    }if (to.meta.requireAuth) {
        //是否存在登录的标志
        if(localStorage.getItem('msk_hasLogin')){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
        next();
    }
})

//切换页面时，页面停止在顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});


export default router;
