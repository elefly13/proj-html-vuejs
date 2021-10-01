<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="big-boxS1">
          <div class="box-left">
            <h2>Certified fitness professional</h2>
            <h1>Take control of your health</h1> 
            <div class="wave">
              <!-- icona -->
            </div>  
            <h3>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</h3>
            <!-- box bottoni sezione1 -->
            <div class="box-btn">
              <div class="btn-big-blue">
                <i class="fab fa-youtube"></i>
                Visit my YouTube channel
              </div>
              <span class="space"></span>
              <div class="btn-big-black">
                Buy AvadaToday
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="box-play">
            <a href="#">
              <div class="play">
                <i class="fas fa-play"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection1',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  height: 800px;
  background-image: url(../assets/img/slider82x-scaled.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top; 
  .container {
    width: 100%;
    height: 800px;
    background-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(255,0,0,0) 80%);
    .big-boxS1 {
      position: relative;
      width: 60%;
      height: 100%;
      margin: 0 auto;
      .box-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
        h2 {
          color: $four;
          font-size: 30px;
        }
        h1 {
          font-size: 75px;
          margin: 30px 0;
        }
        h3 {
          color: $five;
          font-size: 20px;
          margin-top: 30px;
        }
        .box-btn {
          display: flex;
          margin-top: 30px;
        }

      }
      .box-play {
        position: absolute;
        right: 50px;
        bottom: 50%;
      }

    }
  }
  
}
</style>
