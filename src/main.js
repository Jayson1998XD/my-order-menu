import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter)

//配置默认根目录
axios.defaults.baseURL = 'https://my-pizza-app-7f1dc.firebaseio.com/'

Vue.prototype.http = axios;

const router = new VueRouter({
  routes,
  mode:'history',
  //控制路由滚动
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

