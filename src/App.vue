<template>
  <div>
    <appNavbar />
    <router-view></router-view>
    <appFooter />
  </div>
</template>

<script>
import appNavbar from "./components/appNavbar";
import appFooter from "./components/footer";
import "./assets/script/myscript";
require('vue2-animate/dist/vue2-animate.min.css');
export default {
  name: "App",
  components: {
    appNavbar,
    appFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("./assets/style/mystyle.css");
@import url("./assets/style/shop.css");
@import url("./assets/style/product.css");
@import url("./assets/style/cart.css");

</style>
