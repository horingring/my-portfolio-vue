<template>
  <div class="root-wrap">
    <HeaderComponent />
    <GnbBox />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue'
import GnbBox from './components/common/GnbBox.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    GnbBox
  }
}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/index.css";
</style>
