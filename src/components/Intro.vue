<template>
    <div class="intro">
      <div class="overlay"></div>
      <video class="bg-video" src="/static/intro.mp4" poster="/static/intro.png" autoplay muted loop playsinline></video>
      <div class="video-info">
        <h1 class="title">Favorite Anime of 2017</h1>
        <p class="landscape">For mobile devices, please view in landscape and fullscreen for the best experience</p>
        <p class="author">By <a href="https://jinpark.net" target="_blank">Jin Park</a></p>
        <button class="button is-text" @click="toggle" v-show="!ios"><icon class="animated tada infinite" name="arrows-alt" scale="1.5"></icon></button>
      </div>
    </div>
</template>

<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)

export default {
  name: 'Intro',
  methods: {
    toggle () {
      this.$fullscreen.toggle(this.$parent.$el, {
        wrap: false
      })
    }
  },
  computed: {
    ios () {
      // dumb ios check (ios doesnt have full screen api)
      return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  font-weight: bold;
}

button.is-text {
  float: right;
  color: #fff;
}
</style>
