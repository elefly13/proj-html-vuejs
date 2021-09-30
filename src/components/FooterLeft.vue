<template>
    <div >
        <div class="container-left">
            <div class="box-logo">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="">
                </a>
            </div>
            <p>Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus.
                 Pellentesque consectetur amet purus ultrices mauris.
            </p>
            <div class="box-social">
                <ul>
                    <li v-for="(icon, index) in iconsSocial" :key="index">
                        <a href="#">
                            <i :class="icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterLeft',

    data () {
        return {
            iconsSocial: [
                "fab fa-facebook-f",
                "fab fa-twitter",
                "fab fa-instagram",
                "fab fa-linkedin-in",
                "fab fa-youtube"
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
    .container-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 20px;
        .box-logo {
            width: 60%;
            height: 40px;
            margin-bottom: 40px;
            img {
                width: 100%; 
            }
        }
        p {
            color: $five;
            font-size: 20px;
        }
        ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin-top: 30px;
            li {
                margin: 10px;
                i {
                    color: $nine;
                }
            }
        }
    }
}


</style>