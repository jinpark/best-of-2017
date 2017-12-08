<template>
  <swiper-slide>
    <div class="video-info">
      <img :src="posterUrl">
      <h1 class="title">{{anime.title}}</h1>
      <h3 class="japanese-title">{{ anime.japaneseTitle }}</h3>
    </div>
  </swiper-slide>
</template>

<script>

export default {
  name: 'Honorable',
  props: ['anime'],
  computed: {
    posterUrl () {
      return `/static/honorable/${this.anime.filename}.jpg`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
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
  max-height: 80vh;
}

.video-info img {
  max-height: 60vh;
}

.title {
  margin-bottom: 0.1em !important;
  color: #ffffff;
}

.japanese-title {
  margin: 0;
}
</style>
