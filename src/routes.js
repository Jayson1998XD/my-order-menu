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


export const routes = [
  {path:'/',name:'homeLink' ,components:{
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':Delivery,
    'history':History
  }},
  {path:'/menu',name:'menuLink' ,component:Menu},
  {path:'/admin',name:'adminLink' ,component:Admin,
  // beforeEnter:(to,from,next) =>{
    //组件内独享守卫
      // if(to.path =='/login' || to.path =='/register'){
      //   next();
      // }else{
      //   alert("非登陆状态，不能访问次页面！");
      //   next('login');
      // }
  // }
},
  {path:'/about',name:'aboutLink' ,component:About,children:[
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