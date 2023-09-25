<template>
  <div class="intro_wrap" ref="introWrap">
    <video muted autoplay loop ref="backgroundVideo">
        <source :src="require('@/assets/videos/pexels-taryn-elliott-6051208 (1440p).mp4')" type="video/mp4">
    </video>
    <div class="flex-center">
        <div class="btn flex-center" @click="onClickIntroBtn">
            <span>Let's see</span>
            <span>Your</span>
            <span>NewFace!</span>
        </div>
        <span ref="intro1">Developer</span>
        <span ref="intro2">KH Lee</span>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        routePath() {
            return this.$route.path;
        }
    },
    mounted() {
        this.setBackground();
        window.addEventListener('resize', this.setBackground);
        setTimeout(() => {
            this.$refs.intro1.classList.add("on");
            this.$refs.intro2.classList.add("on");
        }, 200);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.setBackground);
    },
    methods: {
        setBackground() {
            const backgroundVideo = this.$refs.backgroundVideo;
            backgroundVideo.width = window.innerWidth;
            backgroundVideo.height = window.innerHeight;
        },
        onClickIntroBtn() {
            window.scrollTo(0, this.$refs.introWrap.offsetHeight);
        }
    }
}
</script>

<style>

</style>