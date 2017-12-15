import Slider from '@/components/Slider'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('Slider.vue', () => {
  let wrapper
  const animes = [
    {
        "title": "Kizumonogatari (Film Trilogy)",
        "japaneseTitle": "傷物語",
        "filename": "kizumonogatari",
        "summary": "Follows Araragi's encounter with the vampire Kiss-shot Acerola-orion Heart-under-blade and his journey back into humanity from being a vampire.",
        "review": "The Monogatari series has one of the strongest visual style out of all modern anime and with a movie budget, they went all in.",
        "youtubeId": "LYPJoA9udJo"
    },
    {
        "title": "Shouwa Genroku Rakugo Shinjuu",
        "japaneseTitle": "昭和元禄落語心中",
        "filename": "rakugo",
        "summary": "Yotarou is a former yakuza member fresh out of prison and fixated on just one thing: rather than return to a life of crime, the young man aspires to take to the stage of Rakugo, a traditional Japanese form of comedic storytelling.",
        "review": "The first season came out in 2016 but this is one of my favorite shows of all time. This show leans heavily on death and loss.",
        "youtubeId": "rMWOuwFpF-g"
    }
  ]
  Object.defineProperty(window, 'IntersectionObserver', {
    enumerable: false,
    configurable: false,
    writable: true,
    value: jest.fn().mockImplementation(() => {observe: jest.fn()})
  })
  // window.IntersectionObserver.observe = jest.fn()
  var a = new window.IntersectionObserver()
  console.log(a)

  beforeEach(() => {
    wrapper = shallow(Slider, {
      propsData: {animes},
      methods: {
        setVideoController: jest.fn()
      }
    })
  })

  // it('is a swiper-slide', () => {
  //   expect(wrapper.is('swiper-slide')).toBe(true)
  // })

  // it('has correct background video data', () => {
  //   const video = wrapper.find('video')
  //   expect(video.hasAttribute('src', '/static/asilentvoice.mp4')).toBe(true)
  //   expect(video.hasAttribute('poster', '/static/asilentvoice.jpg')).toBe(true)
  // })

  // it('hides mute button by default', () => {
  //   const muteButton = wrapper.find('button.unmute')
  //   const unmuteButton = wrapper.find('button.mute')
  //   expect(muteButton.exists()).toBe(true)
  //   expect(unmuteButton.exists()).toBe(false)
  // })

  // it('toggles mute button when clicked', () => {
  //   expect(wrapper.find('button.unmute').exists()).toBe(true)
  //   expect(wrapper.find('button.mute').exists()).toBe(false)
  //   wrapper.find('button.unmute').trigger('click')
  //   expect(wrapper.find('button.unmute').exists()).toBe(false)
  //   expect(wrapper.find('button.mute').exists()).toBe(true)
  // })

  // it('starts modal when youtube button clicked and mutes all the things', () => {
  //   const youtubeButton = wrapper.find('button.youtube')
  //   youtubeButton.trigger('click')
  //   expect(wrapper.vm.isMuted).toBe(true)
  //   expect(wrapper.vm.video.muted).toBe(true)
  //   expect(wrapper.vm.$modal.show).toHaveBeenCalledWith('youtube', {youtubeId: anime.youtubeId})
  // })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
