// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from  'jquery'
import 'popper.js'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

window.$ = window.jQuery = jQuery


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
