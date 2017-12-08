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
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  font-weight: bold;
}
</style>
