<template>
  <div>
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
              <span><span style="color: #777777">Tất cả sản phẩm</span></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!--List Product-->
  <div class="container p-5">
    <div class="row">
      <div class="col-md-3 col-sm-12 col-xs-12 sidebar-fix">
        <div class="wrap-filter">
          <div class="box_sidebar">
            <div class="block left-module">
              <div class=" filter_xs">
                <div class="group-menu">
                  <div class="title_block d-block d-sm-none d-none d-sm-block d-md-none" data-toggle="collapse"
                    href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                    Danh mục sản phẩm
                    <span><i class="fa fa-angle-down" data-toggle="collapse" href="#collapseExample1" role="button"
                        aria-expanded="false" aria-controls="collapseExample1"></i></span>
                  </div>
                  <div class="block_content layered-category collapse" id="collapseExample1">
                    <div class="layered-content card card-body" style="border:0;padding:0">
                      <ul class="menuList-links">
                        <li class=""><a href="" ><span>Football</span></a></li>
                        <li class=""><a href="" ><span>Running</span></a>
                        </li>
                        <li class=""><a href="" ><span>Basketball</span></a></li>
                        <li class=""><a href="" ><span>Fashion</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="layered">
                  <p class="title_block d-block d-sm-none d-none d-sm-block d-md-none" data-toggle="collapse"
                    href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                    Bộ lọc sản phẩm
                    <span><i class="fa fa-angle-down" data-toggle="collapse" href="#collapseExample2" role="button"
                        aria-expanded="false" aria-controls="collapseExample2"></i></span>
                  </p>
                  <div class="block_content collapse" id="collapseExample2">
                    <div class="group-filter" aria-expanded="true">
                      <div class="layered_subtitle dropdown-filter"><span>Giá sản phẩm</span><span
                          class="icon-control"><i class="fa fa-minus"></i></span></div>
                      <div class="layered-content bl-filter filter-price">
                        <ul class="check-box-list">
                          <li>
                            <input type="checkbox" id="p1">
                            <label for="p1">
                              <span>Dưới</span> 500,000₫
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="p2">
                            <label for="p2">
                              500,000₫ - 1,000,000₫
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="p3">
                            <label for="p3">
                              1,000,000₫ - 1,500,000₫
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="p4">
                            <label for="p4">
                              2,000,000₫ - 5,000,000₫
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" id="p5">
                            <label for="p5">
                              <span>Trên</span> 5,000,000₫
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="group-filter" aria-expanded="true">
                      <div class="layered_subtitle dropdown-filter"><span>Màu sắc</span><span class="icon-control"><i
                            class="fa fa-minus"></i></span></div>
                      <div class="layered-content filter-color s-filter">
                        <ul class="check-box-list">
                          <li>
                            <input type="checkbox" id="data-color-p1">
                            <label for="data-color-p1" style="background-color: #fb4727"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p2">
                            <label for="data-color-p2" style="background-color: #fdfaef"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p3">
                            <label for="data-color-p3" style="background-color: #3e3473"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p4">
                            <label for="data-color-p4" style="background-color: #ffffff"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p5">
                            <label for="data-color-p5" style="background-color: #75e2fb"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p6">
                            <label for="data-color-p6" style="background-color: #cecec8"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p7">
                            <label for="data-color-p7" style="background-color: #6daef4"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p8">
                            <label for="data-color-p8" style="background-color: #000000"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p9">
                            <label for="data-color-p9" style="background-color: #e2262a"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p10">
                            <label for="data-color-p10" style="background-color: #ee8aa1"></label>
                          </li>
                          <li>
                            <input type="checkbox" id="data-color-p11">
                            <label for="data-color-p11" style="background-color: #4a5250"></label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="group-filter" aria-expanded="true">
                      <div class="layered_subtitle dropdown-filter"><span>Kích thước</span><span class="icon-control"><i
                            class="fa fa-minus"></i></span></div>
                      <div class="layered-content filter-size s-filter">

                        <ul class="check-box-list clearfix">

                          <li>
                            <input type="checkbox" id="data-size-p1">
                            <label for="data-size-p1">35</label>
                          </li>

                          <li>
                            <input type="checkbox" id="data-size-p2">
                            <label for="data-size-p2">36</label>
                          </li>

                          <li>
                            <input type="checkbox" id="data-size-p3">
                            <label for="data-size-p3">37</label>
                          </li>

                          <li>
                            <input type="checkbox" id="data-size-p4">
                            <label for="data-size-p4">38</label>
                          </li>

                          <li>
                            <input type="checkbox" id="data-size-p5">
                            <label for="data-size-p5">39</label>
                          </li>

                          <li>
                            <input type="checkbox" id="data-size-p6">
                            <label for="data-size-p6">40</label>
                          </li>
                           <li>
                            <input type="checkbox" id="data-size-p7">
                            <label for="data-size-p7">41</label>
                          </li>

                        </ul>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-sm-12 col-xs-12">
        <div class="wrap-collection-title row">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <h1 class="title">
              Tất cả sản phẩm
            </h1>
            <div class="alert-no-filter"></div>
          </div>
          <div class="col-md-4 d-sm-none d-md-block d-none d-sm-block" style="float: left">
            <div class="option browse-tags">
              <span class="custom-dropdown custom-dropdown--grey">
                <select class="sort-by custom-dropdown__select">
                  <option value="price-ascending">Giá: Tăng dần</option>
                  <option value="price-descending">Giá: Giảm dần
                  </option>
                </select>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-6 col-6">
            <div class="product-block">
              <div class="product-img fade-box">
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-9.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-9.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-9.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-9.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-12.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-12.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-12.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-12.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-13.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-13.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-13.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-13.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-14.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-14.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-14.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">

                  <img src="/img/product/n-14.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-15.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-15.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-15.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>

              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
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
                <a href="#" title="Adidas EQT Cushion ADV" class="img-resize">
                  <img src="/img/product/n-15.jpg" alt="Adidas EQT Cushion ADV" class="lazyloaded">
                </a>
              </div>
              <div class="product-detail clearfix">
                <div class="pro-text">
                  <a href="#" title="Adidas EQT Cushion ADV" inspiration pack>
                    Adidas EQT Cushion ADV "North America"
                  </a>
                </div>
                <div class="pro-price">
                  <p class="">7,000,000₫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sortpagibar pagi clearfix text-center">
          <div id="pagination" class="clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <span class="page-node current">1</span>
              <a class="page-node" href="">2</a>
              <a class="next" href="">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                  y="0px" viewBox="0 0 31 10" style="enable-background:new 0 0 31 10; width: 31px; height: 10px;"
                  xml:space="preserve">
                  <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 "></polygon>
                </svg> </a>
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