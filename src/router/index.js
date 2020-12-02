import Vue from 'vue'
import Router from 'vue-router'
import CssManage from '@/views/cssManage/cssManage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CssManage',
      component: CssManage
    },
    {
      path: '/cssManage',
      name: 'CssManage',
      component: CssManage
    }
  ]
})
