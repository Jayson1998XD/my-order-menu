import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'


//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'


Vue.use(VueRouter)

const routes = [
  {path:'/',name:'homeLink' ,component:Home},
  {path:'/menu',name:'menuLink' ,component:Menu},
  {path:'/about',name:'aboutLink' ,component:About,redirect:'/about/contact',children:[
    {path:'/about/contact',name:"contactLink",component:Contact,children:[
        {path:'/phone',name:'phoneNumber',component:Phone},
        {path:'/personName',name:'personName',component:PersonName}
    ]},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/history',name:"historyLink",component:History},
    {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide}
  ]},
  {path:'/admin',name:'adminLink' ,component:Admin},
  {path:'/login',name:'loginLink' ,component:Login},
  {path:'/register',name:'registerLink' ,component:Register},
  {path:'*',redirect:'/'}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})