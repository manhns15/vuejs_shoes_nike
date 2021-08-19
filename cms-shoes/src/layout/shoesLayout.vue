<template>
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div class="container-fluid">
          <slot name="LayoutContent" >
            <router-view :key="$route.path"></router-view>
          </slot>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/common/Sidebar.vue";
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
export default {
  name: "ShoesLayout",
  components: {
    Sidebar,
    Navbar,
    Footer
  }
};
</script>

<style>
</style>