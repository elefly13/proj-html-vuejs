<template>
 <div>
  <div class="wrapper">
    <div class="big-box-img">
      <div class="image">
        <div class="overlay"></div>
        <img src="../assets/img/service6-2x.jpg" alt="">
      </div>
      <div class="image">
        <div class="overlay"></div>
        <img src="../assets/img/box1-2x.jpg" alt="">
      </div>
      <div class="image">
        <div class="overlay"></div>
        <img src="../assets/img/box3-2x.jpg" alt="">
      </div>
    </div>
    <div class="big-box-text">
      <div class="text">
        <div class="wave-small"></div>
        <h2>Crossfit workout</h2>
        <h3>Push your limit</h3>
      </div>
      <div class="text">
        <div class="wave-small"></div>
        <h2>New Gym Apparel</h2>
        <h3>Look good, feel good</h3>
      </div>
      <div class="text">
        <div class="wave-small"></div>
        <h2>Team Training</h2>
        <h3>Find a partner</h3>
      </div>
    </div>
    <!-- testo grande in centro sezione  -->
    <div class="big-text">
      <h1>“How you respond to the challenge in the second half will determine what you become after the game,<br>
          whether you are a winner or a loser.”</h1>
      <div class="wave">
        <!-- icona -->
      </div>
      <div class="small-box">
        <div class="img-user">
          <img src="../assets/img/avatar-1-2x.jpg" alt="">
        </div>
        <h3>Brad Johnson</h3>
        <p>Las Vegas</p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>

export default {
  name: 'MainSection2',
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  position: relative;
  width: 100vw;
  height: 950px;
  background-image: linear-gradient(to bottom right, $six 20%, $four 80%);
  .big-box-img {
    position: absolute;
    bottom: 170px;
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 420px;
    margin: 20%;
    .image {
      position: relative;
      display: inline-block;
      overflow: hidden;
      width: 390px;
      height: 420px;
      box-shadow: 5px 10px 18px $two;
      border-radius: 5px;
      border-bottom-right-radius: 40px;
      transition: 0.5s;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image:hover {
      transform: scale(1.05);
    }
    .image:active {
      transform: scale(1);
    }
  }
  .big-box-text {
    position: absolute;
    bottom: 210px;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 20%;
    .text {
      width: 390px;
      padding-left: 35px;
      cursor: pointer;
      h2 {
        font-size: 35px;
        margin: 10px 0;
      }
      h3 {
        color: $yellow;
        font-size: 25px;
      }
    }
  }
  
  .big-text {
    position: absolute;
    width: 50%;
    margin: 20% 25%;
    text-align: center;
    h1 {
      font-size: 50px;
      padding-bottom: 30px;
    }
    .small-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      .img-user {
        display: inline-block;
        overflow: hidden;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 20px;
        margin: 0 20px;
      }
      p {
        color: $five;
        font-size: 20px;
      }
    }
  } 
}
</style>
