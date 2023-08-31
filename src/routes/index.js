import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CareerPage from "@/pages/CareerPage.vue";
import CareerDetailPage from "@/pages/CareerDetailPage.vue";
import ContactMePage from "@/pages/ContactMePage.vue";

const routes = [
    {
        path: "/my-portfolio-vue/",
        name: "HomePage",
        meta: {
            nick: "Home",
            gnbYn: true
        },
        component: HomePage
    },
    {
        path: "/my-portfolio-vue/career",
        name: "CareerPage",
        meta: {
            nick: "Career",
            gnbYn: true
        },
        component: CareerPage
    },
    {
        path: "/my-portfolio-vue/career/:careerId",
        name: "CareerDetailPage",
        component: CareerDetailPage
    },
    {
        path: "/my-portfolio-vue/contact",
        name: "ContactMePage",
        meta: {
            nick: "Contact Me",
            gnbYn: true
        },
        component: ContactMePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;