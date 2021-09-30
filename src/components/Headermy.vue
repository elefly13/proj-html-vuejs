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
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Videos</a></li>
            <li>
              <a href="#">Store 
                <span class="sticker">new</span>
              </a>
            </li>
            <li><span class="btn-header">Schedule a workout</span></li>
            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li> 
            <li><a href="#"><i class="fas fa-search"></i></a></li>
          </ul>
        </nav>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'Headermy',
  
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
    ul {
      display: flex;
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

</style>
