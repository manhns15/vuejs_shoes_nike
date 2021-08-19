<template>
  <div id="product" class="productDetail-page">

      <!--  menu header seo -->
      <div class="breadcrumb-shop">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5">
              <ol class="breadcrumb breadcrumb-arrows">
                <li>
                  <a href="#">
                    <span>Trang chủ</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Sản phẩm</span>
                  </a>
                </li>
                <li class="active">
                  <span>
                    <span itemprop="name">Nike Air Max 90</span>
                  </span>
                  <meta itemprop="position" content="3">
                </li>

              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- detail product chính -->
      <div class="container">
        <div class="row product-detail-wrapper">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row product-detail-main pr_style_01">
              <div class="col-md-7 col-sm-12 col-xs-12">
                <div class="product-gallery">
                  <div class="product-image-detail box__product-gallery
                    scroll hidden-xs">
                    <ul id="sliderproduct" class="site-box-content
                      slide_product">

                      <li class="product-gallery-item gallery-item
                        current " id="imgg1a">
                        <img class="product-image-feature " src="/img/product/n-3.png"
                          alt="Nike Air Max 90 Essential" grape="">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-sm-12 col-xs-12
                product-content-desc" id="detail-product">
                <div class="product-content-desc-1">
                  <div class="product-title">
                    <h1>Nike Air Max 90 Essential "Grape"</h1>
                    <span id="pro_sku">SKU: S-0015-1</span>
                  </div>
                  <div class="product-price" id="price-preview"><span class="pro-price">4,800,000₫</span></div>
                  <form id="add-item-form" action="/cart/add" method="post" class="variants clearfix">
                    <div class="select clearfix">
                      <div class="selector-wrapper"><label for="product-select-option-0">Màu sắc</label><span
                          class="custom-dropdown custom-dropdown--white"><select class="single-option-selector
                            custom-dropdown__select
                            custom-dropdown__select--white" data-option="option1" id="product-select-option-0">
                            <option value="">Tím</option>
                            <option value="">Xanh</option>
                          </select></span></div>
                      <div class="selector-wrapper"><label for="product-select-option-1">Kích thước</label><span
                          class="custom-dropdown custom-dropdown--white"><select class="single-option-selector
                            custom-dropdown__select
                            custom-dropdown__select--white" data-option="option2" id="product-select-option-1">
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="35">35</option>
                          </select></span></div><select id="product-select" name="id" style="display:none;">
                      </select>
                    </div>
                    <div class="select-swatch clearfix">
                      <div id="variant-swatch-0" class="swatch clearfix" data-option="option1" data-option-index="0">


                        <div class="header" style="background: white;
                          color: #272727;"><span>Tím</span></div>

                        <div class="select-swap">
                          <div data-value="Tím" class="n-sd swatch-element
                            color tim">
                            <input class="variant-0" id="swatch-0-tim" type="radio" name="option1" value="Tím"
                              data-vhandle="tim" checked="">
                            <label class="tim sd" for="swatch-0-tim">
                              <span>Tím</span>
                            </label>

                          </div>
                          <div data-value="Xanh" class="n-sd swatch-element
                            color xanh">
                            <input class="variant-0" id="swatch-0-xanh" type="radio" name="option1" value="Xanh"
                              data-vhandle="xanh">


                            <label class="xanh" for="swatch-0-xanh">
                              <span>Xanh</span>
                            </label>

                          </div>
                        </div>
                      </div>
                      <div id="variant-swatch-1" class="swatch clearfix" data-option="option2" data-option-index="1">


                        <div class="select-swap">
                          <div data-value="36" class="n-sd swatch-element
                            36">
                            <input class="variant-1" id="swatch-1-36" type="radio" name="option2" value="36"
                              data-vhandle="36" checked="">

                            <label for="swatch-1-36" class="sd">
                              <span>36</span>
                            </label>

                          </div>
                          <div data-value="37" class="n-sd swatch-element
                            37">
                            <input class="variant-1" id="swatch-1-37" type="radio" name="option2" value="37"
                              data-vhandle="37">

                            <label for="swatch-1-37">
                              <span>37</span>
                            </label>

                          </div>
                          <div data-value="38" class="n-sd swatch-element
                            38">
                            <input class="variant-1" id="swatch-1-38" type="radio" name="option2" value="38"
                              data-vhandle="38">

                            <label for="swatch-1-38">
                              <span>38</span>
                            </label>

                          </div>
                          <div data-value="35" class="n-sd swatch-element 35
                            soldout">
                            <input class="variant-1" id="swatch-1-35" type="radio" name="option2" value="35"
                              data-vhandle="35" disabled="">

                            <label for="swatch-1-35">
                              <span>35</span>
                            </label>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="selector-actions">
                      <div class="quantity-area clearfix">
                        <input type="button" value="-" class="qty-btn">
                        <input type="text" id="quantity" name="quantity" value="1" min="1" class="quantity-selector">
                        <input type="button" value="+" class="qty-btn">
                      </div>
                      <div class="wrap-addcart clearfix">
                        <div class="row-flex">
                          <button type="button" class="button btn-addtocart addtocart-modal">Thêm
                            vào</button>
                          <button type="button" class="buy-now button" style="display: block;">Mua
                            ngay</button>

                        </div>



                      </div>
                    </div>

                  </form>
                  <div class="product-description">
                    <div class="title-bl">
                      <h2>Mô tả</h2>
                    </div>
                    <div class="description-content">
                      <div class="description-productdetail">
                        <p><span>Hiện đại và thời trang khi diện item mới
                            của Nike. Màu sắc lạ mắt, chất liệu
                            thoáng mát, nhẹ nhàng, phù hợp với những chàng
                            trai yêu phong cách
                            sports.</span><br><br></p>
                        <ul>
                          <li>Chất liệu cao cấp EVA, PU, Cushlon, Phylon.</li>
                          <li>Bền, chống bám bẩn, dễ dàng lau chùi. Mũi giày
                            đầy đặn, form dáng chuẩn.</li>
                          <li>Bảo vệ đầu ngón chân khi hoạt động. Có lớp lót
                            đệm bên trong.</li>
                          <li>Êm, di chuyển nhiều không bị đau chân. Cổ giày
                            thiết kế đơn giản, vừa vặn.</li>
                          <li>Di chuyển dễ dàng, thoải mái.</li>
                          <li>Đế bằng chất liệu cao su<br></li>
                          <li>Êm ái, độ bám tốt, chống trơn trượt.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-productRelated clearfix">
              <div class="heading-title text-center">
                <h2>Sản phẩm liên quan</h2>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                    <div class="product-block">
                      <div class="product-img fade-box">
                        <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                          <img src="/img/product/n-8.png" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                        </a>

                      </div>
                      <div class="product-detail clearfix">
                        <div class="pro-text">
                          <a style="color: black;
                            font-size: 14px;text-decoration: none;" href="#" title="Adidas EQT Cushion ADV" inspiration
                            pack>
                            Adidas EQT Cushion ADV "North America"
                          </a>
                        </div>
                        <div class="pro-price">
                          <p class="">7,000,000₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                    <div class="product-block">
                      <div class="product-img fade-box">
                        <a href="#" title="Adidas Nmd R1" class="img-resize">

                          <img src="/img/product/n-8.png" alt="Adidas Nmd R1" class="lazyloaded">
                        </a>

                      </div>
                      <div class="product-detail clearfix">
                        <div class="pro-text">
                          <a style="color: black;
                            font-size: 14px;text-decoration: none;" title="Adidas Nmd R1" href="">
                            Adidas Nmd R1 "Villa Exclusive"
                          </a>
                        </div>
                        <div class="pro-price">
                          <p class="">7,000,000₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                    <div class="product-block">
                      <div class="product-img fade-box">
                        <a href="#" title="Adidas PW Solar HU NMD" class="img-resize">

                          <img src="/img/product/n-8.png" alt="Adidas PW Solar HU NMD" class="lazyloaded">
                        </a>

                      </div>
                      <div class="product-detail clearfix">
                        <div class="pro-text">
                          <a style="color: black;
                            font-size: 14px;text-decoration: none;" href="#" title="Adidas PW Solar HU NMD" inspiration
                            pack>
                            Adidas PW Solar HU NMD "Inspiration Pack"
                          </a>
                        </div>
                        <div class="pro-price">
                          <p class="">5,000,000₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                    <div class="product-block">
                      <div class="product-img fade-box">
                        <a href="#" title="Adidas Ultraboost W" class="img-resize">

                          <img src="/img/product/n-8.png" alt="Adidas Ultraboost W" class="lazyloaded">
                        </a>

                      </div>
                      <div class="product-detail clearfix">
                        <div class="pro-text">
                          <a style="color: black;
                            font-size: 14px;text-decoration: none;" href="#" title="Adidas Ultraboost W" inspiration
                            pack>
                            Adidas Ultraboost W
                          </a>
                        </div>
                        <div class="pro-price">
                          <p class="">5,300,000₫</p>
                        </div>
                      </div>
                    </div>
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
export default {

}
</script>

<style>

</style>