<template>
  <header
    class="main-header"
    :class="{'green': routePath === '/my-portfolio-vue/career', 'navy': routePath === '/my-portfolio-vue/contact'}"
  >
    <router-link to="/my-portfolio-vue/">Home</router-link>
    <router-link to="/my-portfolio-vue/career">Career</router-link>
    <router-link to="/my-portfolio-vue/contact">Contact Me</router-link>
  </header>
</template>

<script>
export default {
  computed: {
    routePath() {
      return this.$route.path;
    }
  }
}
</script>

<style>

</style>