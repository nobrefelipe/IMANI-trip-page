
// intersection-observer polyfill
require('intersection-observer');

// STYLES
import styles from './assets/scss/main.scss';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lazyLoadImage from "./directives/lazy-load-images";

Vue.config.productionTip = false;


new Vue({
  router,

  directives: { lazyLoadImage},

  methods: {

  },

  render: h => h(App)
}).$mount('#app')
