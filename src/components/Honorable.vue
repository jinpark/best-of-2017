<template>
  <swiper-slide>
    <div class="video-info">
      <img :src="posterUrl">
      <a :href=anime.wiki target="_blank"><button class="button is-text"><icon name="wikipedia-w" scale="1.5"></icon></button></a>
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

.video-info img {
  max-height: 60vh;
}

.title {
  margin-bottom: 0.1em !important;
  color: #ffffff;
}

button.is-text {
  color: white;
  float: right;
}
</style>
