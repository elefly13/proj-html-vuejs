<template>
  <div>
    <div class="container-right">
      <h2>CONTACT INFORMATIONS</h2>
      <p class="address">{{contactList.address}}</p>
      <p class="mobile">Mobile : {{contactList.mobile}}</p>
      <p class="email">Email : {{contactList.email}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FooterRight',
  data() {
    return {
      contactList: {
        address: "4746 Tipple Road Michigan 48449",
        mobile: "1.800.000.0000",
        email: "info@your-company.com"
      }
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
  .container-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;
    .address {
      font-size: 20px;
      color: $five;
      margin: 40px 0;
    }
    .mobile, .email {
      font-size: 20px;
      margin: 3px 0;
    }
  }

}

</style>