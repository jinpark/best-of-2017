<template>
  <div class="all">
    <v-dialog />
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <Intro></Intro>
      <Page v-for="anime in animes" :key="anime.title" v-bind:anime="anime"></Page>
      <End></End>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Page from './Page.vue'
import End from './End.vue'
import animes from '../assets/animes.json'

export default {
  name: 'Slider',
  components: {
    Page,
    Intro,
    End
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.on('slideChange', () => {
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
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        mousewheel: true,
        keyboard: true
      },
      animes: animes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-container {
  width: 100vw;
  height: 100vh;
}
</style>
