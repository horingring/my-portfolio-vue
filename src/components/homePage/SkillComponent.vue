<template>
  <div class="skill_wrap flex-center">
    <div class="header_area">
      <h1 class="flex-center">Skills</h1>
      <div class="header_deco"></div>
    </div>
    <div class="skill_container flex-center">
      <section
        v-for="(stack, idx) in skills" :key="idx"
      >
        <h2>{{ stack.stackName }}</h2>
        <ul class="flex-center">
          <li
            class="flex-center"
            v-for="(skill, idx2) in stack.stackList" :key="idx2"
          >
            <div class="logo_wrap flex-center">
              <img :src="skill.img" :alt="`${skill.skillName}_logo`">
            </div>
            <span>{{ skill.skillName }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('commonStore', ['skills'])
  }
}
</script>

<style>

</style>