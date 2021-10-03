<template>
  <div>
    <div class="wrapper">
      <div class="box-cards">
        <div  v-for="(card, index) in cardsList" :key="index" class="card">
          <i class="fas" :class="card.icon"></i>  <!-- icone provvisorie -->
          <h2>{{card.title}}</h2>
          <h3>{{card.subtitle}}</h3>
          <p>{{card.content}}
          </p>
          <a href="#">{{card.link}}<i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection6',

  data() {
    return {
      cardsList: [ //array card sezione6
        {
          icon:"fa-clock",
          title:"Team training",
          subtitle:"Find a partner",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Find a partner"
        },
        {
          icon:"fa-dumbbell",
          title:"Crossfit workout",
          subtitle:"Push your limit",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Learn about crossfit"
        },
        {
          icon:"fa-child",
          title:"Weight loss plan",
          subtitle:"Shed those pounds",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Schedule a workout"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";
.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 720px;
  background-color: $two;
  .box-cards {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    .card {
      width: 400px;
      height: 560px;
      border: 5px solid $six;
      border-radius: 10px;
      text-align: center;
      padding: 80px 50px;
      cursor: pointer;
      i {
        font-size: 50px;
      }
      h2 {
        font-size: 30px;
        margin: 20px 0;
      }
      h3 {
        color: $yellow;
        font-size: 25px;
      }
      p {
        margin: 40px 0;
        font-size: 18px;
        color: $five;
        line-height: 30px;
      }
      a {
        text-decoration: none;
        color: $one;
        font-size: 20px;
        i {
          font-size: 15px;
          margin-left: 15px;
        }
      }
    } 
  }
}
</style>
