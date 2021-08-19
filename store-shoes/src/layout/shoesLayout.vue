<template>
  <div>
      <Header/>
      <div class="content">
          <slot name="LayoutContent" >
            <router-view :key="$route.path"></router-view>
          </slot>
          <Footer/>
      </div>
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
import Header from '../components/common/Header.vue'
export default {
  components: { Header,Footer },

}
</script>

<style>

</style>