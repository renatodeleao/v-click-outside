import clickOutside from '../src/index'
import { mount } from './test-utils'

const MockComponent = {
  name: 'MockCOmponent',
  directives: {
    clickOutside: clickOutside.directive,
  },
  props: {
    directiveHandlerBinding: {
      type: [Object, Function],
      default: () => {},
    },
  },
  data: () => ({
    keys: Object.keys(clickOutside.directive),
  }),
  template: `
    <div data-test-id="outside">
      {{ keys }}
      <div data-test-id="target" v-click-outside="directiveHandlerBinding">
        Inside content
      </div>
    </div>
  `,
}

let wrapper
const factory = (propsData) => {
  return mount(MockComponent, { attachTo: document.body, propsData })
}

beforeAll(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  if (wrapper) wrapper.destroy()
  jest.clearAllMocks()
})

describe('directive', () => {
  const directiveHandlerSpy = jest.fn()

  it('does not throw errors on component mount', () => {
    wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('works', (done) => {
    wrapper = factory({ directiveHandlerBinding: directiveHandlerSpy })
    jest.runAllTimers()

    return wrapper.trigger('click').then(() => {
      expect(directiveHandlerSpy).toHaveBeenCalledTimes(1)
      done()
    })
  })
})
