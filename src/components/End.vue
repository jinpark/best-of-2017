<template>
  <swiper-slide>
      <div class="overlay"></div>
      <video class="bg-video" src="/static/ending.mp4" autoplay muted loop></video>
      <swiper :options="swiperOption" ref="horizontalSwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="video-info">
            <h1 class="title">Honorable Mentions</h1>
            <h3 class="japanese-title">Almost on the list but not quite!</h3>
            <h3>Swipe or scroll left to continue</h3>
          </div>
        </swiper-slide>
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
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        mousewheel: true,
        keyboard: true,
        autoplay: true
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
a {
  color: #42b983;
}

video.bg-video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -2;
  object-fit: cover;
}

.overlay {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC);
}

.video-info {
  width: 85vw;
  max-height: 90vh;
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: #ffffff;
}

.title {
  color: #fff;
  margin-bottom: 0.2em;
}

ul {
  columns: auto 2;
  text-align: left;
  margin: auto;
  max-width: 85%;
}

li.cute::before {
  content: "🐰 ";
}

li.action::before {
  content: "💥 ";
}

li.drama::before {
  content: "🎭 ";
}

li.comedy::before {
  content: "😂 ";
}

.swiper-container {
  width: 100vw;
  height: 100vh;
}
</style>
