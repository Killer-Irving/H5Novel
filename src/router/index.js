import Vue from 'vue'
import Router from 'vue-router'

import theme from '@/pages/theme/router.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...theme
  ]
})
