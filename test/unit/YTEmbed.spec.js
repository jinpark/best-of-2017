import YTEmbed from '@/components/YTEmbed'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

describe('YTEmbed.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(YTEmbed, {propsData: {youtubeId: 'abcdef'}})
  })

  it('is an iframe', () => {
    expect(wrapper.is('iframe')).toBe(true)
  })

  it('matches snapshot', () => {
    const renderer = createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
