<template>
  <swiper-slide>
    <div class="about">
      <div class="overlay"></div>
      <video class="bg-video" src="/static/intro.mp4" autoplay muted loop playsinline></video>
      <div class="video-info">
        <h1 class="title">Thank You!</h1>
        <p>This was a small fun project to share anime that I love and get more familiar with Vue.js</p>
        <p>If you are looking for a freelance developer, please contact me at <a href="mail:jin@jinpark.net">jin@jinpark.net</a></p>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: 'About',
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
