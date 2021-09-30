<template>
 <div>
    <div class="wrapper">

      <div class="container">
        <div class="big-box">
          <div class="box left">

          </div>
          <div class="box center">

          </div>
          <div class="box right">

          </div>
        </div>
      </div>
      <div class="container-foot-bottom">
        <div class="big-box-foot">

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  
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
      height: 400px;
      background-color: coral;
      .box {
        width: calc(100% / 3);
        height: 100%;
        border: 1px solid black;
      }
    }
  }
  .container-foot-bottom {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 120px;
    border-top: 1px solid $seven;
    .big-box-foot {
      width: 60%;
      height: 60px;
      margin: 0 auto;
      background-color: blanchedalmond;
    }
  }
}
</style>
