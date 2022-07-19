const version = require('vue').version || require('vue').default.version

export const isVue3 = /^3\./.test(version)

// eslint-disable-next-line
export const directiveHooks = {
  beforeMount: isVue3 ? 'beforeMount' : 'bind',
  updated: isVue3 ? 'updated' : 'update',
  unmounted: isVue3 ? 'unmounted' : 'unbind',
}
