<template>
  <nav class="home-page_nav" :class="{'fixed': navFixed}" ref="homePageNav">
    <ul class="flex-center">
        <li class="flex-center">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </li>
        <li class="flex-center" v-for="(item, idx) in navLiList" :key="idx">
            <font-awesome-icon
                :icon="item.icon"
                :class="{'on': currentNav === item.name}"
                @click="onClickNavLi(item)"
            />
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            navLiList: [
                {
                    name: 'home',
                    icon: ['fas', 'house-chimney']
                },
                {
                    name: 'about',
                    icon: ['fas', 'user-tie']
                },
                {
                    name: 'project',
                    icon: ['fas', 'book-bookmark']
                }
            ],
            navFixed: null,
            currentNav: null
        }
    },
    mounted() {
        window.addEventListener('scroll', this.setNavFixed);
        window.addEventListener('scroll', this.setCurrentNav);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.setNavFixed);
        window.removeEventListener('scroll', this.setCurrentNav);
    },
    methods: {
        setNavFixed() {
            if (document.documentElement.scrollTop >= this.$refs.homePageNav.offsetHeight) {
                this.navFixed = true;
            } else {
                this.navFixed = false;
            }
        },
        setCurrentNav() {
            if (document.documentElement.scrollTop < this.$refs.homePageNav.offsetHeight - 200) {
                this.currentNav = "home";
            } else if (document.documentElement.scrollTop < this.$refs.homePageNav.offsetHeight * 2 - 200) {
                this.currentNav = "about";
            } else {
                this.currentNav = "project";
            }
        },
        onClickNavLi(navLi) {
            if (navLi.name === "home") {
                window.scrollTo(0, 0);
            } else if (navLi.name === "about") {
                window.scrollTo(0, this.$refs.homePageNav.offsetHeight);
            } else if (navLi.name === "project") {
                window.scrollTo(0, this.$refs.homePageNav.offsetHeight * 2);
            }
        }
    }
}
</script>

<style>

</style>