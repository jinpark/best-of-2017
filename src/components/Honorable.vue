<template>
  <swiper-slide>
    <div class="video-info">
      <img :src="posterUrl">

      <h1 class="title">{{anime.title}}</h1>
      <div class="info">
        <button class="button is-text hidden"><icon name="wikipedia-w" scale="1.5"></icon></button>
        <h3 class="japanese-title">{{ anime.japaneseTitle }}</h3>
        <a :href=anime.wiki target="_blank" class="wiki"><button class="button is-text"><icon name="wikipedia-w" scale="1.5"></icon></button></a>
      </div>
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
  max-height: 50vh;
}

button.is-text {
  color: white;
  float: right;
}

.info {
  justify-content: center;
  align-items: center;
}

button.hidden {
  visibility: hidden;
  margin-left: auto;
}

a.wiki {
  margin-left: auto;
}

</style>
