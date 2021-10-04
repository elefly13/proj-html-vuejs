<template>
  <div>
    <div class="wrapper">
      <div class="box-cards">
        <div  v-for="(card, index) in cardsList" :key="index" class="card">
          <div class="image">
            <img :src="require('../assets/img/' + card.image + '.png')" alt="">
          </div>
          <div class="wave-small"></div>
          
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
  name: 'MainSection9',

  data() {
    return {
      cardsList: [ //array card sezione6
        {
          image:"sponsor-1-2x",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Visit Yoga Studio"
        },
        {
          image:"sponsor-2-2x",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Join Fitness Center"
        },
        {
          image:"sponsor-3-2x",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Learn about FC"
        },
        {
          image:"sponsor-4-2x",
          content: "Vestibulum, curabiturn eu sem nobh utrices sib nulla adipishing, Nisl sit fames amet senectus eget sed duis vehicula. Tristique.",
          link:"Visit Power Gym"
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
  height: 540px;
  background-color: $one;
  .box-cards {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    .card {
      width: calc(100% / 4);
      padding: 20px;
      text-align: center;
      cursor: pointer;
      .image {
        width: 150px ;
        height: 100px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .wave-small::before {
        color: $six;
      }
      p {
        margin: 20px 0;
        font-size: 18px;
        color: $seven;
        line-height: 30px;
      }
      a {
        text-decoration: none;
        color: $two;
        font-size: 20px;
        font-style: bold;
        i {
          font-size: 15px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
