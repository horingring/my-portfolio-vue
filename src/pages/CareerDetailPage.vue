<template>
  <div class="career-detail-page_wrap">
    <CareerLnb />
    <main ref="detail_main">
        <component :is="`CareerDetail${routeParams.careerId}`"></component>
        <div class="top_btn_wrap flex-center">
            <div class="top_btn flex-center" @click="onClickTopBtn">
                <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #ffffff;" />
            </div>
        </div>
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
import CareerDetail5 from "@/components/careerPage/detail/CareerDetail5.vue";

export default {
    components: {
        CareerLnb,
        CareerDetail0,
        CareerDetail1,
        CareerDetail2,
        CareerDetail3,
        CareerDetail4,
        CareerDetail5
    },
    computed: {
        routeParams() {
            return this.$route.params;
        }
    },
    methods: {
        onClickTopBtn() {
            if(window.innerWidth > 767) {
                this.$refs.detail_main.scrollTo(0, 0);
            } else {
                window.scrollTo(0, 0);
            }
        }
    }
}
</script>

<style>

</style>