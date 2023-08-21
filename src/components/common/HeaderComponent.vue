<template>
  <header class="main-header" :class="{'green': routePath === '/career', 'navy': routePath === '/contact'}">
    <router-link to="/">Home</router-link>
    <router-link to="/career">Career</router-link>
    <router-link to="/contact">Contact Me</router-link>
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