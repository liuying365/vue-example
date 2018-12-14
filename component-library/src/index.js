import ElementUI from 'element-ui'
import TestHello from '../package/hello/index'

const components = [
    TestHello
]
const install = function(Vue) {
  components.map(component => {
      Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  componentLibrary: {
    version: '1.0.0',
    install,
    TestHello
  },
  ElementUI
}
