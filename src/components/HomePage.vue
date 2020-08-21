<template>
  <div>
    <header>
      <div class="Slider">
        <div class="owl-carousel owl-theme">
          <carousel
            :responsive="{
              0: { items: 1 },
              600: { items: 1 },
              1000: { items: 1 },
            }"
            :loop="true"
            :nav="false"
            :autoplay="true"
            :autoplayTimeout="4000"
            :autoplayHoverPause="true"
            :smartSpeed="2000"
          >
            <template slot="prev"
              ><span class="prev "><i class="fas fa-angle-left"></i></span
            ></template>
            <div
              class="item"
              v-for="(carouselItem, index) in carouselItems"
              :key="index"
            >
              <img
                :src="carouselItem.url"
                height="500"
                width="1300"
                class="img-fluid"
                :alt="carouselItem.alt"
              />
              <div class="contentofitem">
                <span>{{ carouselItem.sale }}</span>
                <h1>{{ carouselItem.tilte }}</h1>
                <div class="BUTNS">
                  <button type="button" name="button" class="btn ">
                    <i class="fas fa-shopping-cart"></i> shop now
                  </button>
                  <button type="button" name="button" class="btn ">
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <!-- <div class="item">
              <img
                src="../assets/images/image1.png"
                height="500"
                width="1300"
                class="img-fluid"
                alt="image1"
              />
              <div class="contentofitem">
                <span>Sale Off -50%</span>
                <h1>latest women fashion 2019</h1>
                <div class="BUTNS">
                  <button type="button" name="button" class="btn ">
                    <i class="fas fa-shopping-cart"></i> shop now
                  </button>
                  <button type="button" name="button" class="btn ">
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <div class="item">
              <img
                src="../assets/images/image2.png"
                height="500"
                width="1300"
                class="img-fluid"
                alt="image2"
              />
              <div class="contentofitem">
                <span>Sale Off -50%</span>
                <h1>latest women fashion 2019</h1>
                <div class="BUTNS">
                  <button type="button" name="button" class="btn ">
                    <i class="fas fa-shopping-cart"></i> shop now
                  </button>
                  <button type="button" name="button" class="btn ">
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <div class="item">
              <img
                src="../assets/images/image3.png"
                height="500"
                width="1300"
                class="img-fluid"
                alt="image3"
              />
              <div class="contentofitem">
                <span>Sale Off -50%</span>
                <h1>latest women fashion 2019</h1>
                <div class="BUTNS">
                  <button type="button" name="button" class="btn ">
                    <i class="fas fa-shopping-cart"></i> shop now
                  </button>
                  <button type="button" name="button" class="btn ">
                    learn more
                  </button>
                </div>
              </div>
            </div> -->

            <template slot="next"
              ><span class="next "><i class="fas fa-angle-right"></i></span
            ></template>
          </carousel>
        </div>
      </div>
    </header>
    <section>
      <div class="categories">
        <div class="container">
          <div class="CofCategoris">
            <div class="topDiv">
              <div class="leftDiv BOXDIV">
                <a href="#">
                  <img
                    src="../assets/images/imgbox1.jpg"
                    alt=""
                    class="imgbox"
                  />
                  <span>women's tshirt</span>
                </a>
              </div>
              <div class="MedDiv BOXDIV">
                <a href="#">
                  <div class="TOPPHOTO">
                    <img
                      src="../assets/images/imgbox2.jpg"
                      alt=""
                      class="imgbox IM2"
                    />
                    <span>accessories</span>
                  </div>
                </a>
                <a href="#">
                  <div class="DOWNPHOTO">
                    <img
                      src="../assets/images/imgbox3.jpg"
                      alt=""
                      class="imgbox IM2"
                    />
                    <span>women shoes</span>
                  </div>
                </a>
              </div>
              <div class="RightDiv BOXDIV">
                <a href="#">
                  <img
                    src="../assets/images/imgbox4.jpg"
                    alt=""
                    class="imgbox"
                  />
                  <span>latest trend</span>
                </a>
              </div>
            </div>
          </div>
          <div class="TopSellers">
            <div class="TOPDIVofsellers">
              <div class="leftDiveofSellers">
                <h4>TOP SELLERS</h4>
                <span
                  >In order to give you a better service FameMart uses
                  cookies</span
                >
              </div>
            </div>
            <div class="DOWNDIVofsellers">

              <div class="topsellerBox" v-for="product in productsData" :key="product.id">
                <a>
                  <img
                    :src="product.mainImage"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top" v-if="product.hot">hot</span>
                  <span class="down" v-if="product.new">new</span>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          {{product.productName}}
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <!-- <div class="topsellerBox">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/adult-fashion-fashionable-1549200.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          abito donna - jersey dress
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="topsellerBox">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-fashion-fashionable-1485781.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          abito donna - jersey dress
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="topsellerBox">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-woman-fashion-fashion-model-1926769.jpg"
                    class="imageofTopSeller"
                  />
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          abito donna - jersey dress
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="topsellerBox">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/casual-cute-elegant-428338.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          abito donna - jersey dress
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="topsellerBox">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-cellphone-cute-761963.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
                  <div class="underTheImage">
                    <div class="LBOFUtheimg">
                      <div class="nameOfProduct">
                        <h6 class="fristh6">new dress collection</h6>
                        <h6 class="secondh6">
                          abito donna - jersey dress
                        </h6>
                      </div>
                      <div class="priceOfproduct">
                        <span class="euronum">&pound;459.99</span>
                        <span class="discountPrice">&pound;600.98</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="offer">
        <div class="offercontent">
          <div class="fristDiv">
            <div class="boxOftime">
              <div class="text">
                <h3 class="timeofOffer">23<span>days</span></h3>
              </div>
            </div>
            <div class="boxOftime">
              <div class="text">
                <h3 class="timeofOffer">12<span>hours</span></h3>
              </div>
            </div>
            <div class="boxOftime">
              <div class="text">
                <h3 class="timeofOffer">46<span>minutes</span></h3>
              </div>
            </div>
            <div class="boxOftime">
              <div class="text">
                <h3 class="timeofOffer">47<span>seconds</span></h3>
              </div>
            </div>
          </div>
          <h2 class="textUnderBOXtime">limit edition in pranlo</h2>
          <h1 class="OFFERTEXT">
            min. offer <span class="euronum3">&pound;780</span>
          </h1>
          <button type="button" name="button" class="btn offerBtn">
            <i class="fas fa-shopping-cart"></i> shop now
          </button>
        </div>
      </div>
    </section>
    <section>
      <div class="trending">
        <div class="titlediv">
          <h1 class="title">trending sellers</h1>
          <span class="underthetitle"
            >In order to give you a better service FameMart uses cookies</span
          >
        </div>
        <div class="owl-carousel OC2 owl-theme ">
          <carousel
            :responsive="{
              0: {
                items: 1,
              },
              576: {
                items: 2,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 5,
              },
            }"
            :loop="true"
            :nav="true"
            :autoplay="true"
            :autoplayTimeout="3000"
            :autoplayHoverPause="true"
            :smartSpeed="1500"
          >
            <template slot="prev"
              ><span class="prev "><i class="fas fa-angle-left"></i></span
            ></template>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-cellphone-cute-761963.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/adult-bag-blue-background-1126993.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/adult-fashion-fashionable-1549200.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-fashion-fashionable-1485781.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-woman-fashion-fashion-model-1926769.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/casual-cute-elegant-428338.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/beautiful-cellphone-cute-761963.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <div class="item ITM">
              <div class="topsellerBox2">
                <a href="productdetails.html">
                  <img
                    src="../assets/images/topSellers/adult-bag-blue-background-1126993.jpg"
                    class="imageofTopSeller"
                    alt=""
                  />
                  <span class="top">hot</span>
                  <span class="down">new</span>
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
                </a>
              </div>
            </div>
            <template slot="next"
              ><span class="next "><i class="fas fa-angle-right"></i></span
            ></template>
          </carousel>
        </div>
      </div>
    </section>
    <section>
      <div class="subscribe">
        <div class="subscribecontent">
          <span class="subscribeSPan"
            >sign up for fresh inspiratin & special offers</span
          >
          <h1 class="subscribeTitle">subscribe to our newsletter.</h1>
          <div class="inputGroup">
            <input
              type="email"
              name=""
              value=""
              placeholder="enter you email"
              class="form-control inpt"
            />
            <button type="button" name="button" class="btn btn-dark subbtn">
              <i class="far fa-envelope-open"></i> subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="Fourdivs">
        <div class="container">
          <div class="FDcontent">
            <div class="BOXofFD">
              <div class="circleicon">
                <i class="far fa-paper-plane fa-2x"></i>
              </div>
              <h3 class="titleofboXFD">wordwide shipping</h3>
              <p class="lead toP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div class="BOXofFD">
              <div class="circleicon">
                <i class="fas fa-parachute-box fa-2x"></i>
              </div>
              <h3 class="titleofboXFD">special offers</h3>
              <p class="lead toP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div class="BOXofFD">
              <div class="circleicon">
                <i class="fas fa-box fa-2x"></i>
              </div>
              <h3 class="titleofboXFD">order protection</h3>
              <p class="lead toP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div class="BOXofFD">
              <div class="circleicon">
                <i class="fas fa-headphones-alt fa-2x"></i>
              </div>
              <h3 class="titleofboXFD">professional support</h3>
              <p class="lead toP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="newfeeds">
        <div class="container">
          <div class="titlediv">
            <h1 class="title">news feeds</h1>
            <span class="underthetitle"
              >In order to give you a better service FameMart uses cookies</span
            >
          </div>
          <div class="divsOfnewsFeeds">
            <div class="BoxFeeds">
              <img
                src="../assets/images/newsFeeds/imgfeeds1.png"
                class="imgofNewfeeds"
                alt=""
              />
              <div class="divofinfoFeeds">
                <span class="fristSpanforFeeds"
                  ><i class="far fa-calendar-alt"></i> 23rd dec 2019</span
                >
                <span class="secSpanforFeeds"
                  ><i class="far fa-comments"></i> 33 comments</span
                >
                <h4 class="textonFeeds">
                  Lorem ipsum dolor sit amet, consectetur adip.
                </h4>
                <span class="ABSspanforborder"></span>
              </div>
            </div>
            <div class="BoxFeeds">
              <img
                src="../assets/images/newsFeeds/imgfeeds2.png"
                class="imgofNewfeeds"
                alt=""
              />
              <div class="divofinfoFeeds">
                <span class="fristSpanforFeeds"
                  ><i class="far fa-calendar-alt"></i> 23rd dec 2019</span
                >
                <span class="secSpanforFeeds"
                  ><i class="far fa-comments"></i> 33 comments</span
                >
                <h4 class="textonFeeds">
                  Lorem ipsum dolor sit amet, consectetur adip.
                </h4>
                <span class="ABSspanforborder"></span>
              </div>
            </div>
            <div class="BoxFeeds">
              <img
                src="../assets/images/newsFeeds/imgfeeds3.png"
                class="imgofNewfeeds"
                alt=""
              />
              <div class="divofinfoFeeds">
                <span class="fristSpanforFeeds"
                  ><i class="far fa-calendar-alt"></i> 23rd dec 2019</span
                >
                <span class="secSpanforFeeds"
                  ><i class="far fa-comments"></i> 33 comments</span
                >
                <h4 class="textonFeeds">
                  Lorem ipsum dolor sit amet, consectetur adip.
                </h4>
                <span class="ABSspanforborder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "HomePage",
  data() {
    return {
      carouselItems: [
        {
          url: require("@/assets/images/image1.png"),
          sale: "Sale Off -50%",
          tilte: "latest women fashion 2019",
          alt: "image1",
        },
        {
          url: require("@/assets/images/image2.png"),
          sale: "Sale Off -50%",
          tilte: "latest women fashion 2019",
          alt: "image2",
        },
        {
          url: require("@/assets/images/image3.png"),
          sale: "Sale Off -50%",
          tilte: "latest women fashion 2019",
          alt: "image3",
        },
      ],
    };
  },
  components: {
    carousel,
  },
  created() {
    document.getElementsByClassName("owl-next").innerHTML =
      '<i class="fas fa-angle-right"></i>';
    document.getElementsByClassName("owl-prev").innerHTML =
      '<i class="fas fa-angle-left"></i>';
    this.$store.dispatch("fetchData");
    console.log(this.$store.getters.products);
  },
  computed: {
    productsData(){
      return this.$store.getters.products
    }
  },
};
</script>

<style scoped></style>
