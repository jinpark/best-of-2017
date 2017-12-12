import Intro from '@/components/Intro'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('Intro.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Intro)
  })

  it('is a swiper-slide', () => {
    expect(wrapper.is('swiper-slide')).toBe(true)
  })

  // it('toggles fullscreen', () => {
  //   wrapper.vm.$fullscreen = {toggle: jest.fn()}
  //   wrapper.update()
  //   const button = wrapper.find('button')
  //   button.trigger('click')
  //   expect(wrapper.vm.$fullscreen.toggle).toHaveBeenCalled()
  // })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
