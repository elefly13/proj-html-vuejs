import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/proj-html-vuejs/'
    : '/'
}