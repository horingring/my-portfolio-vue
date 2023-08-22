<template>
  <header
    class="main-header"
    :class="{'green': routePath === '/my-portfolio-vue/career', 'navy': routePath === '/my-portfolio-vue/contact'}"
  >
    <router-link
      v-for="(route, idx) in $router.getRoutes()"
      :key="idx"
      :to="route.path"
    >
      {{ route.meta.nick }}
    </router-link>
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