<template>
  <div>
    <header>
      <div class="clearfix"></div>
      <div class="headerPhoto">
        <div class="contentofHeader">
          <h1 class="titleOfheader">
            our Shop<span class="UndertheTH"
              >Get more amazing things from this shop</span
            >
          </h1>
        </div>
      </div>
    </header>
    <div class="clearfix"></div>
    <section>
      <div class="shopProduct">
        <div class="contentofshop">
          <div class="clearfix"></div>
          <div class="leftnavDivShop" id="LFTN">
            <div class="LFNCONT">
              <div class="OfLeftNav">
                <div class="forSeach">
                  <input
                    type="search"
                    name=""
                    value=""
                    placeholder="Search By.."
                    class="form-control FormSearch"
                  />
                </div>
                <h1 class="text-center">
                  filter
                  <a href="" class="filterIcon"
                    ><i class="fas fa-sort-amount-down"></i
                  ></a>
                </h1>
                <div class="ofListGroup">
                  <ul class="list-group">
                    <li class="list-group-item LGI">
                      <a @click="seenSortBy = !seenSortBy" class="TitleLink"
                        >sort by</a
                      >
                      <div class="clearfix"></div>
                      <transition-group
                        name="slide"
                        enter-active-class="slideInDown"
                        leave-active-class="slideOutUp"
                        class="UlforContentLinks ULcontentLinks1"
                        tag="ul"
                        v-if="seenSortBy"
                      >
                        <li v-for="(lable, index) in sortByLables" :key="index">
                          <span class="checkbox">
                            <label>
                              <!-- <input type="checkbox"> -->
                              <input class="tweak-input" type="checkbox" />
                              {{ lable }}
                            </label>
                          </span>
                        </li>
                      </transition-group>
                    </li>

                    <li class="list-group-item LGI">
                      <a href="" id="LinkOfleftNav1" class="TitleLink">price</a>
                      <div class="clearfix"></div>
                      <ul>
                        <li>
                          <span class="checkbox">
                            <p>
                              <label for="price">Price Range:</label>
                              <input
                                type="text"
                                id="price"
                                readonly
                                style="border:0; color:#FE4330; font-weight:bold;"
                              />
                            </p>

                            <div id="mySlider"></div>
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li class="list-group-item LGI">
                      <a href="" id="LinkOfleftNav2" class="TitleLink">color</a>
                      <div class="clearfix"></div>
                      <ul class="UlforContentLinks ULcontentLinks2">
                        <li v-for="(color, index) in colors" :key="index">
                          <span class="checkbox">
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                class="custom-control-input"
                                id="defaultUnchecked"
                                :name="index"
                              />
                              <label
                                class="custom-control-label"
                                for="defaultUnchecked"
                                >{{ color }}</label
                              >
                            </div>
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li class="list-group-item LGI">
                      <a href="" id="LinkOfleftNav3" class="TitleLink">size</a>
                      <div class="clearfix"></div>
                      <ul class="UlforContentLinks ULcontentLinks3">
                        <li>
                          <span class="checkbox SPANDIVCB">
                            <label>
                              <a href="" class="LinkForSize">s</a>
                              <a href="" class="LinkForSize">m</a>
                              <a href="" class="LinkForSize">L</a>
                              <a href="" class="LinkForSize">xl</a>
                              <a href="" class="LinkForSize">xxl</a>
                              <a href="" class="LinkForSize">over size</a>
                            </label>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="list-group2 LISTGROUP">
                    <a href="" class="TAGS">all products</a>
                    <a href="" class="TAGS">bags</a>
                    <a href="" class="TAGS">decoration</a>
                    <a href="" class="TAGS">fashion</a>
                    <a href="" class="TAGS">furniture</a>
                    <a href="" class="TAGS">accessories</a>
                    <a href="" class="TAGS">hats</a>
                    <a href="" class="TAGS">tie</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="righttnavDivShop" id="RFTN">
            <div class="proDucts">
              <div class="DIVofproducts">
                <div class="proDuctsBOX">
                  <routerLink to="/product/1" tag="a"
                    ><img
                      src="../assets/images/proDuctBox/adult-bag-blue-background-1126993.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></routerLink>

                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/adult-fashion-fashionable-1549200.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-fashion-fashionable-1485781.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-woman-fashion-fashion-model-1926769.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/casual-cute-elegant-428338.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-cellphone-cute-761963.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/adult-bag-blue-background-1126993.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/adult-fashion-fashionable-1549200.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-fashion-fashionable-1485781.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-woman-fashion-fashion-model-1926769.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/casual-cute-elegant-428338.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="proDuctsBOX">
                  <a href=""
                    ><img
                      src="../assets/images/proDuctBox/beautiful-cellphone-cute-761963.jpg"
                      class="imageofTopSeller"
                      alt=""
                  /></a>

                  <span class="top">hot</span>
                  <div class="BoxWhenHoverOnTheImage">
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-shopping-cart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="far fa-heart"></i
                    ></a>
                    <a href="" class="BOXforhoverImage"
                      ><i class="fas fa-expand-arrows-alt"></i
                    ></a>
                  </div>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">abito donna - jersey dress</h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pageIndicator">
                <div class="page-nav">
                  <ul>
                    <li><a href="">First</a></li>
                    <li><a href="" class="prevPageIndecator">Prev</a></li>

                    <li class="ActiveCurrent">
                      <a href="" class="PageLinkindecator">1</a>
                    </li>
                    <li><a href="" class="PageLinkindecator">2</a></li>
                    <li><a href="" class="PageLinkindecator">3</a></li>
                    <li><a href="" class="PageLinkindecator">4</a></li>
                    <li><a href="" class="PageLinkindecator">5</a></li>

                    <li><a href="" class="nextPageIndecator">Next</a></li>
                    <li><a href="">Last</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seenSortBy: false,
      sortByLables: [
        "default",
        "popularity",
        "average rating",
        "newness",
        "price: low to high",
        "price: high to low",
      ],
      colors: ["Red", "Green", "blue", "Oragne", "yellow", "purple"],
    };
  },
};
</script>
<style scoped>
.redRadio:checked {
  background-color: red;
}
</style>
