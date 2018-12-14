import TestHello from './src/Hello.vue'

TestHello.install = function (Vue) {
  Vue.component(TestHello.name, TestHello)
}

export default TestHello
