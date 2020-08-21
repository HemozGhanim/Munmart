<template>
  <div>
    <header>
      <div class="headerPhoto">
        <div class="contentofHeader">
          <h1 class="titleOfheader">
            cart<span class="UndertheTH"
              >Get more amazing things from this shop</span
            >
          </h1>
        </div>
      </div>
    </header>
    <section>
      <div class="cartcontnet">
        <div class="contentofcart container">
          <div class="products-view">
            <div class="productDiv">
              <div class="Main-row-table">
                <div class="img-fluid">
                  <a href="">
                    <img
                      class="img-responsive lazyloaded"
                      src="../assets/images/product/product-name.jpg"
                    />
                  </a>
                </div>
                <div class="row-table">
                  <p>
                    <a class="name" href="">
                      TOP WITH CHEVRON PATTERN
                    </a>
                  </p>
                  <p>
                    category: women , clothes
                  </p>
                  <p class="colore">
                    color: baby blue
                  </p>
                  <p class="size">
                    size: XL
                  </p>
                </div>
                <div class="price-disAndnew">
                  <span class="actual-price">
                    $ 183.60
                  </span>
                  <span class="descount-price">
                    <sub>204.00</sub>
                  </span>
                </div>
                <div class="qt">
                  <div class="wrap input-group spinner">
                    <form class="amountNumber">
                      <button class="btn btn-default btn-minus" type="button">
                        <i class="fas fa-minus"></i>
                      </button>
                      <input type="text" class="form-control " value="1" />
                      <button class="btn btn-default btn-plus" type="button">
                        <i class="fas fa-plus"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="close">
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="checkOut">
            <div class="container">
              <div class="row">
                <div class="col col-4-lg forCenteralize">
                  <div class="ForCoupon">
                    <form class="form-group">
                      <input
                        type="text"
                        class="form-control couponfeild"
                        placeholder="Have a Coupon code?"
                      />
                    </form>
                  </div>
                </div>
                <div class="col col-4-lg forCenteralize">
                  <div class="totalPrice">
                    <p class="total">
                      Total:
                    </p>
                    <p class="lead totalprice">
                      $ 700
                    </p>
                  </div>
                </div>
                <div class="col col-4-lg forCenteralize">
                  <div class="checkOut-btn">
                    <button class="btn btn-success w-100">Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
