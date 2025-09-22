<template>
  <header>
    <h1>{{ currentProject.title }}</h1>
    <span>
      {{ currentProject.from }} ~ {{ currentProject.to }}&nbsp;&nbsp;{{period ? `(${period}개월)` : ''}}
    </span>
    <span>
      url :&nbsp;
      <a :href="currentProject.url" target="_blank">
        {{ currentProject.url }}
      </a>
    </span>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    period: String
  },
  computed: {
    ...mapGetters('projectStore', ['currentProject'])
  }
}
</script>

<style>

</style>