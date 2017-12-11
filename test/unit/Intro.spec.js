import Intro from '@/components/Intro';
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'


describe('Intro.vue', () => {
  let wrapper
  let $fullscreen

  beforeEach(() => {
    $fullscreen = {toggle: jest.fn()}
    wrapper = shallow(Intro, {mocks: {$fullscreen}})
  })

  it('is a swiper-slide', () => {
      expect(wrapper.is('swiper-slide')).toBe(true)
  })

  it('toggles fullscreen', () => {
      const button = wrapper.find('button.button.is-text')
      console.log(wrapper.vm.$fullscreen.toggle)
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
