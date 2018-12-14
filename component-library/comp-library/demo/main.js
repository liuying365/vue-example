// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import TestUI from '../lib/test.min'
import '../lib/theme/style.css'

Vue.config.productionTip = false
Vue.use(TestUI.componentLibrary)
Vue.use(TestUI.ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
