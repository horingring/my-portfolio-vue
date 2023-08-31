<template>
  <div class="career-page_wrap">
    <h1 class="flex-center">수행 프로젝트</h1>
    <ul>
      <li v-for="(project, idx) in projectList" :key="idx">
        <router-link :to="`/my-portfolio-vue/career/${project.id}`">
          <div class="img_wrap" :style="{'background-image': `url(${project.mainImg})`}">
            <div class="dim flex-center"></div>
            <p class="dim_p flex-center">{{ project.subTitle }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('projectStore', ['projectList'])
  }
}
</script>

<style>

</style>