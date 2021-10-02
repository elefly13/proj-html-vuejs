<template>
  <div>
    <div class="wrapper">
      <div class="box-video">
        <div class="title">
          <h2>Featured playlists</h2>
          <h3><a href="#">View all videos<i class="fas fa-chevron-right"></i></a></h3>
        </div>
        <div class="box-cards-video">
        <!-- inizio card video  -->
          <div v-for="(play, index) in playList" :key="index" class="card">
            <div class="video">
              <div class="box-play">
                <a href="#">
                  <div class="play">
                    <i class="fas fa-play"></i>
                  </div>
                </a>
              </div>
              <img :src="require('../assets/img/' + play.video + '.jpg')" alt="">
            </div>
            <div class="title-video">
              <h3><a href="#">{{play.title}}</a></h3>
              <h4><a href="#">{{play.subTitle}}</a></h4>
            </div>
          </div>
        <!-- fine card video  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection4',

  data() {
    return {
      playList: [ //array video
        {
          video:"video2-2x",
          title:"Thinghs & glute workout",
          subTitle: "Increase your mobility"
        },
        {
          video:"video7-2x",
          title:"Thinghs & glute workout",
          subTitle: "Increase your mobility"
        },
        {
          video:"video9-2x",
          title:"Thinghs & glute workout",
          subTitle: "Increase your mobility"
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
  .box-video {
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
    .box-cards-video {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .card {
        width: 420px;
        .video {
          width: 420px;
          height: 250px;
          position: relative;
          display: inline-block;
          overflow: hidden;
          border-radius: 5px;
          border-bottom-right-radius: 40px;
          .play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            i {
              font-size: 15px;
            }
          }
          img {
            width: 100%;
          }
        }  
        .title-video {
          width: 100%;
          text-align: center;
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
            a {
              text-decoration: none;
              color: $six;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
