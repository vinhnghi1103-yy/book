import Vue from 'vue'
import App from './App.vue'

// import Vue-meta
import VueMeta from 'vue-meta'
// import Vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

//import vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import store vuex
import {store} from './store/store'

import 'bootstrap'
// import Vue Fb Customer Chat
import VueFbCustomerChat from 'vue-fb-customer-chat'

// 1. Define route components.
// These can be imported from other files
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/DashBoard'
// import HomePage from './components/HomePage'
import PostsFollowNum from './components/PostsFollowNum'

import Revenue from './views/adminpage/revenue/Revenue.vue'

import UserManager from './views/adminpage/usermanager/UserManager.vue'

import CategoryDetail from './views/adminpage/categorypage/CategoryDetail.vue'
import Category from './views/adminpage/categorypage/Category.vue'

import Nxb from './views/adminpage/nxbpage/Nxb.vue'
import NxbDetail from './views/adminpage/nxbpage/NxbDetail.vue'

import Book from './views/adminpage/book/Book.vue'
import bookDetail from './views/adminpage/book/BookDetail.vue'

import authorDetail from './views/adminpage/authorpage/AuthorDetail.vue'
// import AuthorTable from './components/AuthorTable'
import Author from './views/adminpage/authorpage/Author.vue'

import InfoUser from './views/adminpage/usermanager/InfoUser.vue'

import BookAdded from './components/BookAdded'

import MainPage from './views/userpage/mainpage/MainPage.vue'
import BookDetailPage from './views/userpage/bookdetailpage/BookDetailPage.vue'

import CheckOutPage from './views/userpage/shoppingcartpage/CheckOut.vue'

import SearchPage from './views/userpage/searchpage/SearchPage.vue'

import AccountPage from './views/userpage/account/Account.vue'

// import RegisterPage from './views/userpage/register/RegisterPage.vue'
// import LoginPage from './views/userpage/loginpage/LoginPage.vue'

import History from './views/userpage/account/History.vue'
import OrderDetail from './views/userpage/account/OrderDetail.vue'

import BillDetail from './views/adminpage/billdetail/AdminBillDetail.vue'
import VueHead from 'vue-head'
// import VueGtag from "vue-gtag"


const routes = [
  { path: '/',component:MainPage, name:'user/home',meta:{title:'Trang chu'}},
  { path: '/login-admin', component: Login, },
  { path: '/register-admin', component: Register, name:'register-admin' },
  { path: '/dashboard', component: Dashboard, name:'dashboard'},
  {path:'/postsfollownum',component:PostsFollowNum},

  {path:'/category',component:Category, name:'category'},
  {path:'/category/create',component:CategoryDetail,name:'category/create'},
  {path:'/category/edit/:id',component:CategoryDetail,name:'category/edit'},
  
  {path:'/nxb',component:Nxb, name:'nxb'},
  {path:'/nxb/create',component:NxbDetail, name:'nxb/create'},
  {path:'/nxb/edit/:id',component:NxbDetail,name:'nxb/edit'},

  {path: '/book/',component:Book, name:'book'},
  {path:'/book/create',component:bookDetail,name:'book/create'},
  {path:'/book/edit/:id',component:bookDetail,name:'book/edit'},

  {path:'/author/create',component:authorDetail,name:'author/create'},
  {path:'/author/',component:Author,name:'author'},
  {path:'/author/edit/:id',component:authorDetail,name:'author/edit'},

  {path:'/book-added/:id',component:BookAdded},

  {path:'/revenue',component:Revenue, name:'revenue'},

  {path:'/user-manager',component:UserManager, name:'user-manager'},

  {path:'/user-manager/info/:id',component:InfoUser,name:'info-user'},

  {path:'/bill-detail/:id',component:BillDetail,name:'bill-detail'},
  /**********USER PAGE****************/ 
  {path:'/home',component:MainPage, name:'user/home',meta:{title:'Trang chu'}},
  {path:'/product-detail/:id/:title_seo',
  component:BookDetailPage,
  name:'product-detail',
  
},
  {path:'/check-out/',component:CheckOutPage,name:'checkout',meta:{title:'gio hang'}},
  {path:'/account',component:AccountPage,name:'account'},
  // {path:'/register',component:RegisterPage, name:'register'},
  // {path:'/login',component:LoginPage,name:'login'},
  {path:'/search-page/:categoryId?',component:SearchPage,name:'search-page'},
  {path:'/history',component:History,name:'history'},
  {path:'/history/views/:id',component:OrderDetail,name:'order-detail'},

]
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

Vue.use(VueMeta,{refreshOnceOnNavigation:true})
Vue.use(VueFbCustomerChat,{
  page_id:"264302998782435",
  theme_color: '#333333',
  locale:'en_US'
})

Vue.use(VueHead)
// Vue.use(VueGtag, {
//   config: {id:"G-V6EE1LXCQS"}
// })
new Vue({

  router,
  store,
  render: h => h(App),

}).$mount('#app')
