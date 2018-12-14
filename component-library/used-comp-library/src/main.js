// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TestUI from 'component-library'
import 'component-library/lib/theme/style.css'
import AnimatedInteger from './views/component/AnimatedInteger'
console.log(TestUI)

Vue.component(AnimatedInteger.name, AnimatedInteger) // 注册全局组件
Vue.config.productionTip = false
Vue.use(TestUI.componentLibrary)
Vue.use(TestUI.ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
