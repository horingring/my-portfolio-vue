<template>
  <div class="gnb-box_wrap flex-center" :class="{'on': gnbBoxOn}">
    <div class="router-link_wrap">
        <router-link
            v-for="(route, idx) in gnbList"
            :key="idx"
            :to="route.path"
            @click="onClickGnbLi"
        >
            {{ route.meta.nick }}
        </router-link>
    </div>
    <div
        class="left_btn_wrap flex-center"
        @click="SET_GNB_BOX_ON"
    >
        <font-awesome-icon :icon="['fas', 'angles-left']" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState('commonStore', ['gnbBoxOn']),
        gnbList() {
            return this.$router.getRoutes().filter(v => v.meta.gnbYn)
        }
    },
    methods: {
        ...mapMutations('commonStore', ['SET_GNB_BOX_ON']),
        onClickGnbLi() {
            window.scrollTo(0, 0);
            this.SET_GNB_BOX_ON();
        }
    }
}
</script>

<style>

</style>