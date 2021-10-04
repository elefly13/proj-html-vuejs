<template>
 <div>
  <div class="wrapper">
    <div class="link-side">
          <div class="demos">
            <i class="fas fa-window-maximize"></i>
            <p>Demos</p>
          </div>
          <div class="on-sale">
            <p class="green"><sup>$</sup>39</p>
            <p>On Sale</p>
          </div>
        </div>
     <div class="container">
       <div class="section1">
         <MainSection1/>
       </div>
       <div class="section2">
         <MainSection2/>
       </div>
       <div class="section3">
         <MainSection3/>
       </div>
       <div class="section4">
         <MainSection4/>
       </div>
       <div class="section5">
         <MainSection5/>
       </div>
       <div class="section6">
         <MainSection6/>
       </div>
       <div class="section7">
         <MainSection7/>
       </div>
       <div class="section8">
         <MainSection8/>
       </div>
       <div class="section9">
         <MainSection9/>
       </div>
       <div class="section10">
         <MainSection10/>
       </div>

     </div>

   </div>
 </div>
</template>

<script>
import MainSection1 from './MainSection1.vue'
import MainSection2 from './MainSection2.vue'
import MainSection3 from './MainSection3.vue'
import MainSection4 from './MainSection4.vue'
import MainSection5 from './MainSection5.vue'
import MainSection6 from './MainSection6.vue'
import MainSection7 from './MainSection7.vue'
import MainSection8 from './MainSection8.vue'
import MainSection9 from './MainSection9.vue'
import MainSection10 from './MainSection10.vue'
export default {
  name: 'Main',
  components: {
    MainSection1,
    MainSection2,
    MainSection3,
    MainSection4,
    MainSection5,
    MainSection6,
    MainSection7,
    MainSection8,
    MainSection9,
    MainSection10

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  .link-side {

      position: fixed;
      z-index: 99;
      right: 10px;
      top: 180px;
      width: 70px;
      height: 100px;
      .demos {
        width: 70px;
        height: 70px;
        background-color: $one;
        border-radius: 5px;
        margin-bottom: 5px;
        color: $two;
        text-align: center;
        padding: 15px;
        i {
          font-size: 25px;
        }
      }
      .on-sale {
        width: 70px;
        height: 70px;
        background-color: $one;
        border-radius: 5px;
        margin-bottom: 5px;
        color: $two;
        text-align: center;
        padding: 10px 5px;
        .green {
          font-size: 25px;
          color: rgb(6, 179, 6);
        }
      }

    }
  
  
  
}
</style>
