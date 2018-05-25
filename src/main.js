// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import { Loading } from 'element-ui';
import VueParticles from 'vue-particles'

import router from './router'


import axios from 'axios'


// Vue.use(VueResource)  axios代替vue-resource，vue-resource官网不再更新
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(VueParticles) //背景特性粒子

// require('./mock.js')

Vue.config.productionTip = false

let defaultToken = "";
var qs = require('querystring');
//决定是否过滤URL中的/api
let isFilterApi = window.location.host.indexOf('127.0.0.1:')>-1||window.location.host.indexOf('localhost:')>-1?false:true;
Vue.prototype.$http = axios.create({
    baseURL: '',
    timeout: 30000, //超时设置
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    transformRequest: [function (data) {
        if(!data.__proto__.append){
          //非上传图片的格式
          data = qs.stringify(data);
        }
        //上传图片的原始格式

        return data;
    }],
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }]
});

let _loading='';
Vue.prototype.$ajax = function (option) {
  if (!option.data) {
    option.data = {};
  }
  // 如果请求参数对象中，存在 noloading:true，则不执行默认的loading加载图；
  // 否则执行默认的加载图
  if(!option.noloading){
    _loading=Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }
  this.$http({
    method:option.method,
    url:isFilterApi?(option.url.replace("/api","")):option.url,
    data:option.data,
    dataType: "json",
  }).then(obj=>{
    if(obj.data){
      obj = JSON.parse(obj.data);
    }
    option.success && option.success(obj);
    _loading&&_loading.close();
  }).catch(err=>{
    _loading&&_loading.close();
    option.error?option.error(err):console.error(err.message);
  })
};


// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('msk_hasLogin')) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${localStorage.getItem('msk_hasLogin')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('msk_hasLogin');
                    router.replace({
                        path: 'login'
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})



