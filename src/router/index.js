import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import Index from '@/components/Index'
import Timing from '@/components/Timing'
import AddTime from '@/components/AddTime'

Router.prototype.goBack = function (n) {
   this.isBack = true
   window.history.go(-1);
 }
 
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
         path: '',
         name:'Index',
         component: Index,
      },{
         path : '/timing',
         component : Timing
      },{
         path : '/addTime',
         name: 'AddTime',
         component : AddTime
      }]
    }

  ]
})
