<template>
  <Carousel
    :wrapAround="true"
    :autoplay="Number(3000)"
    :pauseAutoplayOnHover="true"
  >
    <template #slides>
      <Slide v-for="(slide, idx) in slides" :key="idx">
        <img :src="slide.src" :alt="slide.alt">
      </Slide>
    </template>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    slides: Array
  }
}
</script>

<style>

</style>