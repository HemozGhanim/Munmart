<template>
  <div>
    <div class="allnav">
      <div class="FORnav ">
        <nav class="navbar navbar-expand-lg navbar-light  nav nav1">
          <div class="BrandAndToggle">
            <button
              class="navbar-toggler BUttoogle btn"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="ToggleBtnNav"
            >
              <span class="navbar-toggler-icon"></span>s
              <!-- <i class="fas fa-bars"></i> --></button
            ><a href="" class="navbar-brand BrandLink">MunMart<span>.</span></a>
          </div>
          <ul class="navbar-nav mt-auto mr-auto">
            <routerLink to="/" tag="li" class="nav-item"
              ><a class="nav-link" href="">home</a></routerLink
            >
            <routerLink to="/about" tag="li" class="nav-item"
              ><a class="nav-link" href="#">about</a></routerLink
            >
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >elements</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
            <routerLink to="/shop" tag="li" class="nav-item"
              ><a class="nav-link shopIcon" href="">shop</a></routerLink
            >
            <routerLink to="/contact-us" tag="li" class="nav-item"
              ><a class="nav-link" href="">contact</a></routerLink
            >
          </ul>
          <div class="searchAndChart">
            <button class="SANDClink1" @click="seen = !seen">
              <i class="fas fa-search"></i>
            </button>
            <routerLink to="/cart" tag="a" href="" class="SANDClink2"
              ><i class="fas fa-shopping-cart"></i><span>10</span></routerLink
            >
          </div>
        </nav>
      </div>
      <div class="forOverflow">
        <transition
          name="slide"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp"
        >
          <div
            class="searchBarHeader"
            v-if="seen"
            style="animation-duration: 0.5s"
          >
            <div class="contentSearchBar">
              <input
                type="text"
                class="form-control inputSearchBar"
                placeholder="search"
              />
              <button class="btn btn-dark butt-search">search</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appNavbar",
  data() {
    return {
      seen: false,
    };
  },
};
</script>
<style scoped></style>
