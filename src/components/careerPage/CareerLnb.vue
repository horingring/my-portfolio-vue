<template>
  <nav>
    <ul>
      <li v-for="(project, idx) in projectList" :key="idx">
        <router-link 
          :to="`/my-portfolio-vue/career/${project.id}`"
          :ref="`project_${project.id}`"
          @mouseover="addBackgroundColor($event, project.color)"
          @mouseleave="removeBackgroundColor($event)"
          :style="{'background-color': isCurrentClicked(project.id) ? project.color : null}"
        >
          - {{ project.subTitle }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('projectStore', ['projectList']),
    routeCareerId() {
      return this.$route.params.careerId;
    }
  },
  watch: {
    routeCareerId(val) {
      if(val) {
        this.scrollToCurrentLnb(val);
      }
    },
  },
  mounted() {
    this.scrollToCurrentLnb(this.routeCareerId);
  },
  methods: {
    addBackgroundColor(e, color) {
      e.currentTarget.style.backgroundColor = color;
    },
    removeBackgroundColor(e) {
      if(!e.currentTarget.classList.contains('router-link-exact-active')) {
        e.currentTarget.style.backgroundColor = '';
      }
    },
    isCurrentClicked(id) {
      if(Number(id) === Number(this.routeCareerId)) {
        return true
      }
      return false;
    },
    scrollToCurrentLnb(routeCareerId) {
      this.$refs[`project_${routeCareerId}`][0].$el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>

</style>