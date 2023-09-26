<template>
  <div class="home-page_wrap">
    <main>
        <IntroComponent />
        <AboutComponent />
        <SkillComponent />
    </main>
    <HomePageNav />
  </div>
</template>

<script>
import IntroComponent from '@/components/homePage/IntroComponent.vue';
import AboutComponent from '@/components/homePage/AboutComponent.vue';
import SkillComponent from '@/components/homePage/SkillComponent.vue';
import HomePageNav from '@/components/homePage/HomePageNav.vue';

export default {
    components: {
        IntroComponent,
        AboutComponent,
        SkillComponent,
        HomePageNav
    }
}
</script>

<style>

</style>