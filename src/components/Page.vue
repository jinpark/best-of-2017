<template>
  <swiper-slide>
    <div class="overlay"></div>
    <video class="bg-video" :src="videoUrl" :poster="posterUrl" preload muted loop playsinline></video>
    <div class="video-info">
      <h1 class="title">{{anime.title}}</h1>
      <h3 class="japanese-title">{{ anime.japaneseTitle }}</h3>
      <p class="summary"><b>Summary</b>: {{anime.summary}}</p>
      <div class="info">
        <p class="review"><b>Review</b>: {{anime.review}}</p>
        <button class="button is-text youtube" @click="show"><icon name="youtube-play" scale="1.5"></icon></button>
        <button class="button is-text mute" @click="muteToggle" v-if="!this.isMuted"><icon name="volume-up" scale="1.5"></icon></button>
        <button class="button is-text unmute" @click="muteToggle" v-if="this.isMuted"><icon name="volume-off" scale="1.5"></icon></button>
      </div>
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
      this.isMuted = !this.isMuted
      /* istanbul ignore next */
      this.$nextTick(() => {
        this.video.muted = this.isMuted
      })
    },
    show () {
      this.video.muted = true
      this.isMuted = true
      this.$modal.show('youtube', {youtubeId: this.anime.youtubeId})
      this.$ga.event('button', 'youtube', this.anime.title)
    }
  },
  data () {
    return {
      isMuted: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  color: white !important;
}

div.info {
  justify-content: center;
  align-items: center;
}
</style>
