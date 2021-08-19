<template>
  <div>
    <ul class="navbar-nav bg-gradient-custom sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div class="sidebar-brand-icon rotate-n-15">
          <img src="/img/logo/nike_PNG19.png" width="30" alt="">
        </div>
        <div class="sidebar-brand-text mx-3">nike-shoes</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/">
          <i class="fas fa-tachometer-alt"></i>
          <span>Thống kê</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Manager</div>

      <li class="nav-item">
        <router-link class="nav-link" to="/products">
          <i class="fas fa-dolly"></i>
          <span>Quản lý sản phẩm</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/categorys">
          <i class="fas fa-tasks"></i>
          <span>Danh mục</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/customers">
          <i class="fas fa-address-book"></i>
          <span>Tài khoản khách hàng</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="oders">
          <i class="fas fa-desktop"></i>
          <span>Quản lý đơn hàng</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Message -->
      <div class="sidebar-card">
        <img class="sidebar-card-illustration mb-2" src="/img/logo/logo.png" alt />
        <p class="text-center mb-2">
          <strong>NIKE-SHOES</strong> Xin lưu ý rằng việc giao hàng hiện đang
          mất nhiều thời gian hơn bình thường. Để kiểm tra trạng thái của đơn đặt hàng,
          vui lòng truy cập trang đơn đặt hàng của bạn. Cảm ơn vì sự kiên nhẫn của bạn.
        </p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>