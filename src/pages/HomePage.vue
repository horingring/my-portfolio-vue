<template>
  <div class="home-page_wrap">
    <main>
        <IntroComponent />
        <AboutComponent />
        <ProjectComponent />
    </main>
    <HomePageNav />
  </div>
</template>

<script>
import IntroComponent from '@/components/homePage/IntroComponent.vue';
import AboutComponent from '@/components/homePage/AboutComponent.vue';
import ProjectComponent from '@/components/homePage/ProjectComponent.vue';
import HomePageNav from '@/components/homePage/HomePageNav.vue';

export default {
    components: {
        IntroComponent,
        AboutComponent,
        ProjectComponent,
        HomePageNav
    }
}
</script>

<style>

</style>