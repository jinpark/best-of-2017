<template>
  <swiper-slide>
    <div class="overlay"></div>
    <video class="bg-video" :src="anime.videoUrl" preload muted loop></video>
    <div class="video-info">
      <h1 class="title">{{anime.title}}</h1>
      <h3 class="japanese-title">{{ anime.japaneseTitle }}</h3>
      <p class="summary">{{anime.summary}}</p>
      <button class="modal" @click="show">Youtube</button>
    </div>
  </swiper-slide>    
</template>

<script>

export default {
  name: 'Page',
  props: ['anime'],
  methods: {
    show () {
      this.$modal.show('dialog', {
        text: `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${this.anime.youtubeId}?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      `,
        buttons: [
          { 
            title: 'Close'
          }
      ]
      })
    }
  },
  data () {
    return {
      iframe: `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${this.anime.youtubeId}?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      `
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
  max-width: 80vw;
  margin: 10vh auto auto auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: white;
}

.title {
  margin-bottom: 0.1em;
}

.japanese-title {
  margin: 0;
}
</style>
