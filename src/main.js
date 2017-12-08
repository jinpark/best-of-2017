// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VModal from 'vue-js-modal'
import 'vue-awesome/icons/'
import Icon from 'vue-awesome/components/Icon'
import fullscreen from 'vue-fullscreen'

import 'bulma/css/bulma.css'
import 'vue-canvasvideo/dist/vuecanvasvideo.min.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VModal, { dialog: true })
Vue.component('icon', Icon)
Vue.use(fullscreen)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
