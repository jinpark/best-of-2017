<template>
  <div class="all">
    <div class="initial">
      <Intro></Intro>
    </div>
    <modal name="youtube" @before-open="beforeOpen" :adaptive=false width="80%" height="80%">
      <YTEmbed :youtubeId="youtubeId"></YTEmbed>
    </modal>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <Page v-for="anime in animes" :key="anime.title" v-bind:anime="anime"></Page>
      <End></End>
      <About></About>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Page from './Page.vue'
import YTEmbed from './YTEmbed.vue'
import End from './End.vue'
import About from './About.vue'
import animes from '../assets/animes.json'

export default {
  name: 'Slider',
  components: {
    Page,
    YTEmbed,
    Intro,
    End,
    About
  },
  methods: {
    beforeOpen (e) {
      this.youtubeId = e.params.youtubeId
    },
    enableScrollEvent (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
          entry.target.classList.add('pointer')
        }
      })
    },
    setVideoController () {
      this.swiper.on('slideChange', () => {
        this.$ga.event('slide', 'change', 'normal', this.swiper.activeIndex)
        // pause and play video on slide change
        var activeSlide = this.swiper.slides[this.swiper.activeIndex]
        var previousSlide = this.swiper.slides[this.swiper.previousIndex]
        if (activeSlide.getElementsByTagName('video').length > 0) {
          activeSlide.getElementsByTagName('video')[0].play()
        }
        if (previousSlide.getElementsByTagName('video').length > 0) {
          previousSlide.getElementsByTagName('video')[0].pause()
          previousSlide.getElementsByTagName('video')[0].muted = true
        }
      })
    },
    setObserver () {
      const observer = new window.IntersectionObserver(this.enableScrollEvent, {
        root: null,
        threshold: [0.99]
      })
      observer.observe(document.getElementsByClassName('swiper-container')[0])
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.setVideoController()
    // this.setObserver()
  },
  data () {
    return {
      youtubeId: '',
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        mousewheel: true,
        keyboard: true,
        simulateTouch: false
      },
      animes: animes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
.initial {
  width: 100vw;
  height: 100vh;
}
.pointer {
  pointer-events: auto;
}

</style>
