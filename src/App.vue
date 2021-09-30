<template>
  <div id="app">
    <div class="header">
      <Headermy/>     
    </div>
    <div class="main">
      <Main/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Headermy from './components/Headermy.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Headermy,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import "./style/general.scss";
@import "./style/vars.scss";
</style>
