<template>
  <div data-test-id="outside" @click="$emit('click-outside')">
    {{ test }}
    <div data-test-id="target" v-click-outside="directiveBinding">
      <p>Inside content</p>
    </div>
  </div>
</template>

<script>
import clickOutside from '../../src/index.js'

export default {
  directives: {
    clickOutside,
  },
  props: {
    directiveBinding: {
      type: [Object, Function],
      default: () => ({}),
    },
  },
  data: () => ({
    test: 'Test content',
  })
}
</script>
