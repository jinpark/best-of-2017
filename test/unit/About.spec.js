import About from '@/components/About';
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'


describe('About.vue', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(About)
  })

  it('is a swiper-slide', () => {
      expect(wrapper.is('swiper-slide')).toBe(true)
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
