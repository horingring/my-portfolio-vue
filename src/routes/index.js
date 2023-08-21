import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CareerPage from "@/pages/CareerPage.vue";
import ContactMePage from "@/pages/ContactMePage.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/career",
        name: "CareerPage",
        component: CareerPage
    },
    {
        path: "/contact",
        name: "ContactMePage",
        component: ContactMePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;