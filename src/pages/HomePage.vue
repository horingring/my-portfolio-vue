<template>
  <div class="home-page_wrap">
    <main>
        <IntroComponent />
        <AboutComponent />
    </main>
  </div>
</template>

<script>
import IntroComponent from '@/components/homePage/IntroComponent.vue';
import AboutComponent from '@/components/homePage/AboutComponent.vue';

export default {
    components: {
        IntroComponent,
        AboutComponent
    }
}
</script>

<style>

</style>