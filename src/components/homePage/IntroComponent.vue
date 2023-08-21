<template>
  <div class="intro_wrap flex-center" :class="{'background-std_ver': backgroundRate}">
    <div class="btn flex-center">
        <span>Let's see</span>
        <span>Your</span>
        <span>NewFace!</span>
    </div>
    <span ref="intro1">Developer</span>
    <span ref="intro2">KH Lee</span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundRate: null
        }
    },
    computed: {
        routePath() {
            return this.$route.path;
        }
    },
    mounted() {
        this.calcBackgroundRate();
        window.addEventListener('resize', this.calcBackgroundRate);
        setTimeout(() => {
            this.$refs.intro1.classList.add("on");
            this.$refs.intro2.classList.add("on");
        }, 200);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.calcBackgroundRate);
    },
    methods: {
        calcBackgroundRate() {
            const rate = window.innerWidth / window.innerHeight < 1920/1280;
            this.backgroundRate = rate;
        }
    }
}
</script>

<style>

</style>