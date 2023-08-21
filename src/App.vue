<template>
  <div class="root-wrap">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/index.css";
</style>
