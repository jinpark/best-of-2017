<template>
  <swiper-slide>
      <div class="overlay"></div>
      <video class="bg-video" src="/static/ending.mp4" autoplay muted loop playsinline></video>
      <swiper :options="horizontalSwiperOption" ref="horizontalSwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="video-info">
            <h1 class="title">Honorable Mentions</h1>
            <h3 class="japanese-title">Almost on the list but not quite!</h3>
            <h3>Swipe or scroll left to continue</h3>
          </div>
        </swiper-slide>
        <!-- honorable slides -->
        <Honorable v-for="anime in animes" :key="anime.title" v-bind:anime="anime"></Honorable>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </swiper-slide>
</template>

<script>
import Honorable from './Honorable.vue'
import animes from '../assets/honorable.json'

export default {
  name: 'End',
  components: {
    Honorable
  },
  computed: {
    horizontalSwiper () {
      return this.$refs.horizontalSwiper.swiper
    }
  },
  mounted () {
    this.setAnalytics()
  },
  methods: {
    // cant test mounted yet

    setAnalytics /* istanbul ignore next */ () {
      this.horizontalSwiper.on('slideChange', () => {
        this.$ga.event('slide', 'change', 'honorable', this.horizontalSwiper.activeIndex)
      })
    }
  },
  data () {
    return {
      horizontalSwiperOption: {
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        mousewheel: true,
        keyboard: true,
        loop: true
      },
      animes: animes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-button-next {
  right: 30px;
}

.swiper-container {
  width: 100vw;
  height: 100vh;
}
</style>
