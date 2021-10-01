<template>
  <div>
    <div class="wrapper">
      <div class="box-img-left">
         <div class="box-play">
            <a href="#">
              <div class="play">
                <i class="fas fa-play"></i>
              </div>
            </a>
          </div>
      </div>
      <div class="box-right">
        <div class="box-int">
          <h2>Tune up your workouts</h2>
        <h1>The best health & fitness advice online</h1>
        <div class="box-icon">
          <img src="../assets/img/unnamed.jpg" alt="">
          <p>ThemeFusion</p>
        </div>
        <h3>Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</h3>
        <div class="btn-red">
          <div class="btn-big-red">
            <i class="fab fa-youtube"></i>
            Visit my YouTube channel
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection3',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";
.wrapper {
  position: relative;
  width: 100%;
  height: 700px;
  .box-img-left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:  - 65px;
    background-image: url(../assets/img/service15-2x.jpg);
    background-size: 100%;
    background-position-y: center;
    width: 50%;
    height: 765px;
    border-radius: 5px;
    border-bottom-right-radius: 50px;
  }
  .box-right {
    float: right;
    display: flex;
    align-items:center ;
    width: 50%;
    height: 100%;
    .box-int {
      width: 70%;
      margin: auto;
      h2 {
      color: $six;
      font-size: 26px;
      }
      h1 {
        font-size:60px;
        color: $two;
        margin: 20px 0;
      }
      .box-icon {
        display: flex;
        p {
          color: $seven;
        }
      }
      h3 {
        color: $seven;
        font-size: 24px;
        margin: 20px 0;
      }
    }
  }
}
</style>
