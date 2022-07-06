const { isVue3 } = require('vue-demi')

module.exports = isVue3
  ? require('@vue/test-utils-vue3')
  : require('@vue/test-utils')
