// <template>
//     <modal :name=youtube-id>
//     <div slot="top-right">
//       <button @click="$modal.hide(youtube-id)">
//         ❌
//       </button>
//     </div>
//     <div class="iframe" v-html="iframe"></div>
//   </modal>
// </template>

// <script>
// export default {
//   name: 'Page',
//   props: ['youtube-id'],
//   methods: {
//     show () {
//     }
//   },
//   data () {
//     return {
//         iframe: `
//             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${youtube-id}?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
//         `
//     }
//   }
// }
// </script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped>
// </style>
