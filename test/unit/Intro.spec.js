import Intro from '@/components/Intro'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('Intro.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Intro)
  })

  it('checks iOS', () => {
    const oldUserAgent = global.window.navigator.userAgent
    Object.defineProperty(window.navigator, 'userAgent', {
      enumerable: false,
      configurable: false,
      writable: true,
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
    })
    wrapper = shallow(Intro)
    expect(wrapper.vm.ios).toBe(true)
    // reset userAgent to previous value
    Object.defineProperty(window.navigator, 'userAgent', {
      enumerable: false,
      configurable: false,
      writable: true,
      value: oldUserAgent
    })
  })

  it('toggles fullscreen', () => {
    wrapper.vm.$parent = {$el: null}
    wrapper.vm.$fullscreen = {toggle: jest.fn()}
    wrapper.update()
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.$fullscreen.toggle).toHaveBeenCalled()
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
