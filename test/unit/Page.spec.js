import Page from '@/components/Page'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('Page.vue', () => {
  let wrapper
  const anime = {
    "title": "A Silent Voice (Film)",
    "japaneseTitle": "聲の形",
    "filename": "asilentvoice",
    "summary": "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
    "review": "Everyone has regrets and everyone deals with them differently. What's the right way to redeem yourself?",
    "youtubeId": "nfK6UgLra7g"
  }
  const $modal = {
    show: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(Page, {propsData: {anime}, mocks: {$modal}})
  })

  it('is a swiper-slide', () => {
    expect(wrapper.is('swiper-slide')).toBe(true)
  })

  it('has correct background video data', () => {
    const video = wrapper.find('video')
    expect(video.hasAttribute('src', '/static/asilentvoice.mp4')).toBe(true)
    expect(video.hasAttribute('poster', '/static/asilentvoice.jpg')).toBe(true)
  })

  it('hides mute button by default', () => {
    const muteButton = wrapper.find('button.unmute')
    const unmuteButton = wrapper.find('button.mute')
    expect(muteButton.exists()).toBe(true)
    expect(unmuteButton.exists()).toBe(false)
  })

  it('toggles mute button when clicked', () => {
    expect(wrapper.find('button.unmute').exists()).toBe(true)
    expect(wrapper.find('button.mute').exists()).toBe(false)
    wrapper.find('button.unmute').trigger('click')
    expect(wrapper.find('button.unmute').exists()).toBe(false)
    expect(wrapper.find('button.mute').exists()).toBe(true)
  })

  it('starts modal when youtube button clicked and mutes all the things', () => {
    const youtubeButton = wrapper.find('button.youtube')
    youtubeButton.trigger('click')
    expect(wrapper.vm.isMuted).toBe(true)
    expect(wrapper.vm.video.muted).toBe(true)
    expect(wrapper.vm.$modal.show).toHaveBeenCalledWith('youtube', {youtubeId: anime.youtubeId})
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
