<template>
  <iframe width="100%" height="100%" :src="source" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</template>

<script>

export default {
  name: 'YTEmbed',
  props: ['youtubeId'],
  computed: {
    source () {
      return `https://www.youtube.com/embed/${this.youtubeId}?rel=0&amp;showinfo=0`
    }
  }
}
</script>