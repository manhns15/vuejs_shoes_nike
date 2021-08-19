<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">

    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/img/logo/nike_PNG18.png" class="logo-top" alt="">
      </a>
      <div class="desk-menu collapse navbar-collapse justify-content-md-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/home">TRANG CHỦ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">SẢN PHẨM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">GIỚI THIỆU</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/introduce">LIÊN HỆ</a>
          </li>
        </ul>
      </div>


      <div id="offcanvas-flip1" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar" style="background: white;
        width: 100%;">

          <button class="uk-offcanvas-close" style="color:#272727" type="button" uk-close></button>
          <h3 style="font-size: 14px;
          color: #272727;
          text-transform: uppercase;
          margin: 3px 0 30px 0;
          font-weight: 500; letter-spacing: 2px;">MENU</h3>
          <div class="justify-content-md-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/home">TRANG CHỦ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products">SẢN PHẨM</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">GIỚI THIỆU</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/introduce">LIÊN HỆ</a>
              </li>
            </ul>
          </div>

        </div>
      </div>


      <div class="icon-ol">
        <a href="">
          <i class="ti-search"></i>
        </a>
        <a href="#">
          <i class="ti-shopping-cart"></i>
        </a>
        <a href="">
          <i class="ti-user"></i>
        </a>
        <button class="navbar-toggler" type="button" uk-toggle="target: #offcanvas-flip1" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>