import Honorable from '@/components/Honorable';
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'


describe('Honorable.vue', () => {
  const anime = {
        "title": "Welcome to the Ballroom",
        "japaneseTitle": "ボールルームへようこそ",
        "genre": "drama",
        "filename": "ballroom",
        "wiki": "https://en.wikipedia.org/wiki/Welcome_to_the_Ballroom"
  }

  it('is a swiper-slide', () => {
      const wrapper = shallow(Honorable, {propsData: {anime}})
      expect(wrapper.is('swiper-slide')).toBe(true)
  })

  it('image src is correctly computed', () => {
      const wrapper = shallow(Honorable, {propsData: {anime}})
      expect(wrapper.find('img').hasAttribute('src', '/static/honorable/ballroom.jpg')).toBe(true)
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallow(Honorable, {propsData: {anime}})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
