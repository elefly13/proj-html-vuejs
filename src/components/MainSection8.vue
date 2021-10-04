<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="big-box">
          <div class="box-center">
            <h1>“I’ve failed over and over again in my <br> life. And that is why I succeed.”</h1> 
            <div class="wave">
              <!-- <i class="fas fa-signature"></i> -->
              <!-- icona -->
            </div>  
            <h3>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. 
              In lacinia lacus donec sed massa  <br>in ipsum eros, tristique. Gravida suspendisse etiam in iaculis</h3>
            <!-- box bottone sezione8 -->
            <button class="btn-buy-blue">
              Buy AvadaToday
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection8',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  height: 800px;
  background-image: url(../assets/img/banner2-2x.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top; 
  .container {
    width: 100%;
    height: 800px;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0) 0%, rgba(0,0,0,0.9) 95%);
    .big-box {
      position: relative;
      width: 60%;
      height: 100%;
      margin: 0 auto;
      .box-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        h1 {
          font-size: 65px;
          margin-bottom: 40px;
        }
        h3 {
          color: $five;
          font-size: 25px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
    } 
  }
}
</style>
