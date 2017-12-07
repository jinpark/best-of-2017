<template>
  <swiper-slide>
    <div class="overlay"></div>
    <video class="bg-video" :src="videoUrl" :poster="posterUrl" preload muted loop></video>
    <div class="video-info">
      <h1 class="title">{{anime.title}}</h1>
      <h3 class="japanese-title">{{ anime.japaneseTitle }}</h3>
      <p class="summary"><b>Summary</b>: {{anime.summary}}</p>
      <p class="review"><b>Review</b>: {{anime.review}}</p>
      <button class="button is-text" @click="show"><icon name="youtube-play" scale="1.5"></icon></button>
      <button class="button is-text" @click="muteToggle"><icon name="volume-off" scale="1.5"></icon></button>
    </div>
  </swiper-slide>
</template>

<script>

export default {
  name: 'Page',
  props: ['anime'],
  computed: {
    video () {
      return this.$el.getElementsByTagName('video')[0]
    },
    videoUrl () {
      return `/static/${this.anime.filename}.mp4`
    },
    posterUrl () {
      return `/static/${this.anime.filename}.jpg`
    }
  },
  methods: {
    muteToggle () {
      if (this.video.muted) {
        this.video.muted = false
      } else {
        this.video.muted = true
      }
    },
    show () {
      this.video.muted = true
      this.$modal.show('youtube', {youtubeId: this.anime.youtubeId})
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

button {
  color: white !important;
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
  margin-bottom: 0.1em;
  color: #ffffff;
}

.japanese-title {
  margin: 0;
}

p.summary {
  padding-bottom: 0.5em;
}

p.review {
  padding-top: 0.5em;
  border-top: 1px solid white;
}
</style>
