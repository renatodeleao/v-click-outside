import directive from './v-click-outside'

const plugin = {
  install(Vue) {
    Vue.directive('click-outside', directive)
  },
  directive,
}

export { default as vClickOutsideMixin } from './mixin'
export default plugin
