<template>
  <swiper-slide>
    <div class="end">
      <div class="overlay"></div>
      <video class="bg-video" src="/static/intro.mp4" poster="/static/intro.png" autoplay muted loop></video>
      <div class="video-info">
        <h1 class="title">Honorable Mentions</h1>
        <p>Shows I liked but didn't make it on the list</p>
        <ul>
          <li class="drama">3-Gatsu No Lion</li>
          <li class="comedy">Aho Girl</li>
          <li class="drama">Ballroom e Youkoso</li>
          <li class="action">Boku no Hero Academia S2</li>
          <li class="action">Boruto</li>
          <li class="cute">Demi-chan wa Kataritai</li>
          <li class="comedy">Gintama</li>
          <li class="cute">Isekai Shokudou</li>
          <li class="cute">Little Witch Academia</li>
          <li class="cute">New Game!!</li>
          <li class="drama">Owarimonogatari</li>
          <li class="action">Shingeki no Kyojin S2</li>
          <li class="action">Shokugeki no Souma: San no Sara</li>
          <li class="cute">Shoujo Shuumatsu Ryokou</li>
          <li class="drama">Yowamushi Pedal: NEW GENERATION</li>
        </ul>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: 'End',
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
  content: "🐰"; 
}

li.action::before {
  content: "💥"; 
}

li.drama::before {
  content: "🎭"; 
}

li.comedy::before {
  content: "😂"; 
}
</style>
