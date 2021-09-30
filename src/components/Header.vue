<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="box-logo">
          <a href="#">
            <img src="../assets/img/logo.png" alt="">
          </a>
        </div>
        <nav class="box-link">
          <!-- link di navigazione sito -->
          <ul>
            <li v-for="(link, index) in navbar" :key="index">
              <a href="#">{{link.link}}
                <span v-if="(link.new == true) ? 'sticker-off' : null" class="sticker">new</span>
              </a>
            </li>
          </ul>
          <!-- bottone header -->
          <div>
            <span class="btn-header">Schedule a workout</span>
          </div>
          <!-- link di navigazione icone -->
          <ul>
            <li v-for="(icon, index) in iconsHeader" :key="index">
              <a href="#">
                <i :class="icon"></i>
              </a>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navbar: [
        {
          link: "Home",
          new: false
        },
        {
          link: "Service",
          new: false
        },
        {
          link: "About",
          new: false
        },
        {
          link: "Videos",
          new: false
        },
        {
          link: "Store",
          new: true
        }, 
      ],
      iconsHeader: [
        "fas fa-shopping-cart",
        "fas fa-search"
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
  width: 100vw;
  height: 100px;
  background-color: $two;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 100px;
    margin: 0 auto;
    .box-link {
      display: flex;
      justify-content: center;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        li {
          padding-right: 40px;
          a {
            text-decoration: none;
            color: $five;
            font-size: 18px;
            font-weight: 400;
          }
          a:hover {
            color: $one;
          }
        }
      }
    }
  }
}

</style>
