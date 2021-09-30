<template>
  <div>
    <div class="container-center">
      <h2>RECENT POSTS</h2>
      <ul>
        <li v-for="(post, index) in postsList" :key="index">
          <a href="#">
            <i class="fas fa-chevron-right"></i>
            {{post}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCenter',
  data() {
    return {
      postsList: [
        "The best protein shake",
        "Ultimate cardio workout",
        "New juices available now",
        "Tips to find training partners",
        "20 best healthy recipes"
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style/general.scss";
@import "../style/vars.scss";
div {
  width: 100%;
  height: 100%;
  .container-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;
    ul {
      list-style: none;
      li {
        margin: 20px 0;
        a {
          text-decoration: none;
          font-size: 20px;
          color: $one;
        }
      }
    }
  }
}

</style>