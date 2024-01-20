import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import PageSlug from "@/components/PageSlug.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/page/:slug",
    name: "PageSlug",
    component: PageSlug,
    props: true,
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
