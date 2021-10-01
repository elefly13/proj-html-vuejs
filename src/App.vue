<template>
  <div id="app">
    <div class="header">
      <Header/>     
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
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import "./style/general.scss";
@import "./style/vars.scss";
</style>
