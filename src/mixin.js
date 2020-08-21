import { bind, unbind } from './v-click-outside'

export default {
  methods: {
    // shortcut the directive bindingValue format by wrapping the value
    // in a value keyed object automatically
    $_vco_bind(el, bindingValue) {
      const $bindingValue = {
        value: bindingValue,
      }

      bind(el, $bindingValue)
    },
    $_vco_unbind(el) {
      unbind(el)
    },
  },
}
