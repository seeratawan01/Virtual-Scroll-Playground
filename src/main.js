import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VirtualList from 'vue-virtual-scroll-list'
import VueVirtualScroller from 'vue-virtual-scroller'
Vue.component('virtual-list', VirtualList)
Vue.use(VueVirtualScroller)

Vue.use(VueRouter)

Vue.config.productionTip = false

import VirtualScrollList from "@/VirtualScrollList";
import VirtualScroller from "@/VirtualScroller";
import Home from "@/Home";
const routes = [
  { path: '/', component: Home },
  { path: '/Virtual-Scroll-Playground/', component: VirtualScrollList },
  { path: '/Virtual-Scroll-Playground/vue-virtual-scroller', component: VirtualScroller },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
