<template>
  <div class="career-detail-page_wrap">
    <CareerLnb />
    <main>
        <component :is="`CareerDetail${routeParams.careerId}`"></component>
    </main>
  </div>
</template>

<script>
import CareerLnb from '@/components/careerPage/CareerLnb.vue'
import CareerDetail0 from "@/components/careerPage/detail/CareerDetail0.vue";
import CareerDetail1 from "@/components/careerPage/detail/CareerDetail1.vue";
import CareerDetail2 from "@/components/careerPage/detail/CareerDetail2.vue";
import CareerDetail3 from "@/components/careerPage/detail/CareerDetail3.vue";
import CareerDetail4 from "@/components/careerPage/detail/CareerDetail4.vue";

export default {
    components: {
        CareerLnb,
        CareerDetail0,
        CareerDetail1,
        CareerDetail2,
        CareerDetail3,
        CareerDetail4
    },
    computed: {
        routeParams() {
            return this.$route.params;
        }
    }
}
</script>

<style>

</style>