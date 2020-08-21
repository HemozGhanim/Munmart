<template>
  <div>
    <header>
      <div class="clearfix"></div>
      <div class="headerPhoto">
        <div class="contentofHeader">
          <h1 class="titleOfheader">
            product details<span class="UndertheTH"
              >Get more amazing things from this shop</span
            >
          </h1>
        </div>
      </div>
    </header>
    <div class="clearfix"></div>

    <div class="productDetails">
      <div class="ProductContent">
        <div class="boxOfProduct">
          <div class="container">
            <div class="productdetailscontent">
              <div class="PhotosAnddetails">
                <div class="Detailsofproduct">
                  <div class="divOfphotos">
                    <div class="mainPhoto">
                      <img
                        src="../assets/images/product/beautiful-fashion-fashionable-14857812-1.jpg"
                        class="imgProduct"
                        alt=""
                      />
                    </div>
                    <div class="allPhotos">
                      <div class="BoxOfphotos">
                        <img
                          src="../assets/images/product/beautiful-fashion-fashionable-14857812-1.jpg"
                          class="imgProduct2"
                          alt=""
                        />
                        <img
                          src="../assets/images/product/bathtub-fashion-feet-1630344-1.jpg"
                          class="imgProduct2"
                          alt=""
                        />
                        <img
                          src="../assets/images/product/adult-fashion-fashionable-1549200-1.jpg"
                          class="imgProduct2"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="divOfdetails">
                    <div class="detailscontent">
                      <div class="nameAndLove">
                        <h1>product name</h1>
                        <span class="SPANOFicon"
                          ><i class="far fa-heart fa-3x HeartIcon"></i
                        ></span>
                      </div>

                      <div class="priceAndreview">
                        <h3 class="price">
                          <span>&pound;20.00</span>&pound;14.00
                        </h3>
                        <div class="toreview">
                          <div class="star-rating">
                            <div class="rateit" data-rateit-mode="font"></div>
                          </div>
                        </div>
                      </div>

                      <div class="numberAndcart">
                        <div class="number">
                          <button
                            type="button"
                            name="button"
                            class="BUTFORNUMBER"
                            id="decreaseBut"
                          >
                            <i class="fas fa-arrow-circle-down fa-2x"></i>
                          </button>
                          <input
                            type="text"
                            name=""
                            class="inputNumber"
                            id="textB"
                            min="0"
                          />
                          <button
                            type="button"
                            class="BUTFORNUMBER"
                            name="button"
                          >
                            <i class="fas fa-arrow-circle-up fa-2x"></i>
                          </button>
                        </div>
                        <div class="Cart">
                          <button
                            type="button"
                            name="button"
                            class="btn  BTNCART"
                          >
                            add to cart<i class="fas fa-cart-plus IconCart"></i>
                          </button>
                        </div>
                      </div>

                      <div class="Categories">
                        <div class="Categorys">
                          <span class="NAmeOfsAndC">Categories:</span>
                          <a href="#" class="LinkOfsAndC"
                            ><span class="SpanOfsAndC">clothes</span></a
                          ><span class="SpanOfsAndC">,</span>
                          <a href="#" class="LinkOfsAndC"
                            ><span class="SpanOfsAndC">shirt</span></a
                          >
                        </div>
                        <div class="Share">
                          <div class="btn shareBtn" id="shareBtnShare">
                            <i class="fas fa-share-alt "></i>
                            <span>share</span>
                          </div>
                          <div class="FORSOCIALICON">
                            <div class="socialIcons">
                              <a href="#"><i class="fab fa-facebook-f "></i></a>
                              <a href="#"><i class="fab fa-twitter"></i></a>
                              <a href="#"><i class="fab fa-google"></i></a>
                              <a href="#"><i class="fas fa-envelope"></i></a>
                              <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reviewAndComments">
                <div class="forNavRevAndComm">
                  <ul>
                    <routerLink
                      to="/product/1"
                      tag="li"
                      class="ListRandC1 "
                      activeClass="activeList"
                      exact
                    >
                      <a class="listRandCLink1">description</a>
                    </routerLink>
                    <routerLink
                      to="/product/1/reviewes"
                      tag="li"
                      class="ListRandC2"
                      activeClass="activeList"
                    >
                      <a class="listRandCLink2">reviewes</a>
                    </routerLink>
                    <routerLink
                      to="/product/1/comments"
                      tag="li"
                      class="ListRandC3"
                      activeClass="activeList"
                    >
                      <a class="listRandCLink3">commentes</a>
                    </routerLink>
                  </ul>
                </div>
                <div class="RevAndCommcontent">
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mutations} from 'vuex';
export default {
  data() {
    return {
      disableButton: true,
    };
  },

};
</script>
