import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CareerPage from "@/pages/CareerPage.vue";
import ContactMePage from "@/pages/ContactMePage.vue";

const routes = [
    {
        path: "/my-portfolio-vue/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/my-portfolio-vue/career",
        name: "CareerPage",
        component: CareerPage
    },
    {
        path: "/my-portfolio-vue/contact",
        name: "ContactMePage",
        component: ContactMePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;