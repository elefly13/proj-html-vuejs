<template>
  <div>
    <div class="wrapper">
      <div class="box-blog">
        <div class="title">
          <h2>Latest articles</h2>
          <h3><a href="#">Read all articles<i class="fas fa-chevron-right"></i></a></h3>
        </div>
        
          <div class="box-cards-blog">
          <!-- inizio card blog  -->
            <div v-for="(article, index) in articlesList" :key="index" class="card">
              <div class="blog">
                <div class="overlay-blue"></div>
                <img :src="require('../assets/img/' + article.image + '.jpg')" alt="">
              </div>
              <div class="title-blog">
                <h3><a href="#">{{article.title}}</a></h3>
                <h4>{{article.subTitle.credit}}<a href="#">admin</a>{{article.subTitle.data}}<a href="#">Gym</a></h4>
              </div>
            </div>
          <!-- fine card blog  -->
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection7',

  data() {
    return {
      articlesList: [ //array blog
        {
          image:"blog4-2x",
          title:"The best protein shake",
          subTitle: {
            credit: "By ",
            data: " | November 26th, 2019 | "
          }
        },
        {
          image:"blog1-2x",
          title:"Ultimate cardio workout",
          subTitle: {
            credit: "By ",
            data: " | November 26th, 2019 | "
          }
        },
        {
          image:"blog3-2x",
          title:"New juices available now",
          subTitle: {
            credit: "By ",
            data: " | November 26th, 2019 | "
          }
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
  height: 700px;
  .box-blog {
    width: 60%;
    margin: 0 auto;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
      padding-right: 30px;
      h2 {
        color: $two;
      }
      h3 {
        a {
          text-decoration: none;
          color: $two;
          i {
            font-size: 15px;
            margin-left:10px ;
          }
        }
      }
    }
      .box-cards-blog {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .card {
          width: 420px;
          .blog {
            width: 420px;
            height: 250px;
            position: relative;
            overflow: hidden;
            img {
              width: 100%;
            }
          }  
          .title-blog {
            width: 100%;
            padding-left: 20px;
            margin-top: 20px;
            h3 {
              a {
              text-decoration: none;
              color: $two;
              font-size: 25px;
              }
            }
            h4 {
              margin-top: 20px;
              color: $five;
              font-size: 20px;
              a {
                text-decoration: none;
                color: $two;
                font-size: 20px;
              }
            }
          }
        }
      }
    
  }
}
</style>
