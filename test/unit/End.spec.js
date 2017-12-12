import End from '@/components/End'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('End.vue', () => {
  let wrapper
  const animes = [
    {
      "title": "In This Corner of the World (Film)",
      "japaneseTitle": "この世界の片隅に",
      "filename": "inthiscorneroftheworld",
      "summary": "Set in Hiroshima during World War II, an eighteen-year-old girl gets married and now has to prepare food for her family despite the rationing and lack of supplies. As she struggles with the daily loss of life's amenities she still has to maintain the will to live.",
      "review": "A slice of life story set during WW2 in Japan. Not as soul crushing as 'Grave of the Fireflies' but bring tissues.",
      "youtubeId": "-jBe-uHhlNs"
    },
    {
      "title": "A Silent Voice (Film)",
      "japaneseTitle": "聲の形",
      "filename": "asilentvoice",
      "summary": "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
      "review": "Everyone has regrets and everyone deals with them differently. What's the right way to redeem yourself?",
      "youtubeId": "nfK6UgLra7g"
    }
  ]
  const horizontalSwiper = {
    on: jest.fn(),
    activeIndex: 1
  }

  beforeEach(() => {
    wrapper = shallow(End, {stubs: {Honorable: '<div class="honorable" />'}})
    wrapper.setComputed({horizontalSwiper})
    wrapper.setMethods({setAnalytics: jest.fn()})
    wrapper.setData({animes})
  })

  it('is a swiper-slide', () => {
    expect(wrapper.is('swiper-slide')).toBe(true)
  })

  it('contains a swiper', () => {
    expect(wrapper.find('swiper').exists()).toBe(true)
  })

  it('is has correct number of honorable slides', () => {
    expect(wrapper.findAll('.honorable')).toHaveLength(animes.length)
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
