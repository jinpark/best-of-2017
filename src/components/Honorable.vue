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
  },
  methods: {
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


.overlay {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background-size: cover;
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
