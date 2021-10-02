<template>
 <div>
  <div class="wrapper">
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
       <div class="section3">
         <MainSection4/>
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
export default {
  name: 'Main',
  components: {
    MainSection1,
    MainSection2,
    MainSection3,
    MainSection4,

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

.wrapper {
  width: 100vw;
  
  
  
}
</style>
