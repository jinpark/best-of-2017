<template>
  <swiper-slide>
    <div class="intro">
      <div class="overlay"></div>
      <video class="bg-video" src="/static/intro.mp4" poster="/static/intro.png" autoplay muted loop></video>
      <div class="video-info">
        <h1 class="title">Favorite Anime of 2017</h1>
        <p class="landscape">For mobile devices, please view in landscape and fullscreen for the best experience</p>
        <p class="author">By <a href="https://jinpark.net" target="_blank">Jin Park</a></p>
        <button class="button is-text" @click="toggle" v-show="!ios"><icon name="arrows-alt" scale="1.5"></icon></button>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    toggle () {
      this.$fullscreen.toggle(this.$parent.$el, {
        wrap: false,
        callback: this.fullscreenChange
      })
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
  },
  computed: {
    ios () {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    }
  },
  data () {
    return {
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
}

button.is-text {
  float: right;
  color: #fff;
}
</style>
