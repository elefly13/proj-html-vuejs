<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="big-boxS1">
          <div class="box-left">
            <h2>Join our mailing list today</h2>
            <h1>Insider offers & flash sales in your <br> inbox every week.</h1> 
            <div class="wave">
              <!-- <i class="fas fa-signature"></i> -->
              <!-- icona -->
            </div>  
            <!-- box bottoni sezione5 -->
            <div class="box-email">
             <input type="email" name="" id="" placeholder="Insert your email ...*">
              <span class="space"></span>
              <div class="btn-big-blue">
                Subscribe
              </div>
            </div>
            <h3>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur <br> 
            adipiscing elit sed porttitor lectus.</h3>
            
          </div>
         
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection5',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  height: 800px;
  background-image: url(../assets/img/banner1-2x.jpg);
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
          font-size: 65px;
          margin: 30px 0;
        }
        h3 {
          color: $five;
          font-size: 25px;
          margin-top: 30px;
        }
        .box-email {
          display: flex;
          margin-top: 30px;
          input {
            width: 650px;
            border-radius: 30px;
            padding-left: 20px ;
            font-size: 15px;
          }
          input:focus {
             outline: none;
          }
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
