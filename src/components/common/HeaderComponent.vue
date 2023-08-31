<template>
  <header
    class="main-header"
    :class="{
      'green': routeName && routeName.includes('Career'),
      'navy': routeName === 'ContactMePage',
      'project-detail-page': isProjectDetailPage
    }"
    :style="{'background-color': isProjectDetailPage && currentProjectDetail() ? currentProjectDetail().color : null}"
  >
    <router-link
      v-for="(route, idx) in gnbList"
      :key="idx"
      :to="route.path"
      :class="{'router-link-exact-active': route.name === 'CareerPage' && routeName === 'CareerDetailPage'}"
    >
      {{ route.meta.nick }}
    </router-link>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('projectStore', ['projectList']),
    routeName() {
      return this.$route.name;
    },
    gnbList() {
      return this.$router.getRoutes().filter(v => v.meta.gnbYn)
    },
    isProjectDetailPage() {
      return this.routeName === 'CareerDetailPage';
    },
  },
  methods: {
    currentProjectDetail() {
      for(let i=0; i<this.projectList.length; i++) {
        if (Number(this.projectList[i].id) === Number(this.$route.params.careerId)) {
          return this.projectList[i];
        }
      }
      return null;
    }
  }
}
</script>

<style>

</style>