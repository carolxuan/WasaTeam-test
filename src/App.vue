<template>
  <div class="sticky-footer">
    <Navbar />
    <router-view/>
    <Footer class="sticky-bottom" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
</style>
