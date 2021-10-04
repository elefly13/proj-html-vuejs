<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="over-black"></div>
        <div class="big-box">
          <div class="box-center">
            <!-- div play video  -->
            <div class="box-play">
              <a href="#">
                <div class="play">
                  <i class="fas fa-play"></i>
                </div>
              </a>
            </div>
            <h1>Crossfit workout of the day</h1> 
            <h2>November 15th, 2019</h2>
            <p><a href="#">View all videos<i class="fas fa-long-arrow-alt-right"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection10',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  height: 800px;
  background-image: url(../assets/img/banner14-2x.jpg);
  filter: contrast(150%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top; 
  .container {
    width: 100%;
    height: 800px;
    background-image: linear-gradient(to bottom right, rgba($six,0.5) 30%, rgba($three, 0.5) 70%);
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
        .box-play {
          margin: 0 auto;
          width: 100px;
          a {
            text-decoration: none;
          }
        }
        h1 {
          font-size: 65px;
          margin: 40px 0;
        }
        h2 {
          color: $yellow;
          font-size: 40px;
          margin-bottom: 40px;
        }
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            font-size: 25px;
            text-decoration: none;
            color: $one;
            line-height: 20px;
            i {
              padding-left: 15px;
            }
          }
        }
      }
    } 
  }
}
</style>
