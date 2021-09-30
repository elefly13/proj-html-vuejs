<template>
  <div>
    <div class="container-bottom">
      <div class="copyright">
        <p>
          <i class="far fa-copyright"></i>
          Copyright 2012 - 2020 | Avada Theme by <a href="#">ThemeFusion</a>
          | All Rights Reserved | Powered by <a href="#">WordPress</a>
        </p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBottom',
}
</script>

<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";

div {
  width: 100%;
  height: 100%;
  .container-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;
    .copyright {
      width: 100%;
      p {
        color: $five;
        font-size: 18px;
        i {
        color: $five;
        font-size: 15px;
        }
        a {
          text-decoration: none;
          color: $one;
        }
      }
    } 
  }
}

</style>