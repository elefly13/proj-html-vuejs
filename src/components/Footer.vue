<template>
 <div>
    <div class="wrapper">
      <div class="container">
        <div class="big-box">
          <div class="box left">
            <FooterLeft/>
          </div>
          <div class="box center">
            <FooterCenter/>
          </div>
          <div class="box right">
            <FooterRight/>
          </div>
        </div>
      </div>
      <div class="container-foot-bottom">
        <div class="big-box-foot">
          <FooterBottom/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import FooterLeft from './FooterLeft.vue'
import FooterCenter from './FooterCenter.vue'
import FooterRight from './FooterRight.vue'
import FooterBottom from './FooterBottom.vue'
export default {
  name: 'Footer',
  components: {
    FooterLeft,
    FooterCenter,
    FooterRight,
    FooterBottom
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  height: 720px;
  background-color: $two;
  .container {
    display: flex;
    align-items: center;
    width: 60%;
    height: 600px;
    margin: 0 auto;
    .big-box {
      display: flex;
      width: 100%;
      height: 350px;
      
      .box {
        width: calc(100% / 3);
        height: 100%;
      }
    }
  }
  .container-foot-bottom {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 120px;
    border-top: 0.5px solid $seven;
    .big-box-foot {
      width: 60%;
      height: 50px;
      margin: 0 auto;
    }
  }
}
</style>
