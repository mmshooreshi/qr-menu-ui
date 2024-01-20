import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/PdfMenu.vue";
import PageSlug from "../components/PageSlug.vue"; // Create this component to display pages based on the slug

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page/:slug", // :slug is the dynamic segment representing the page slug
    name: "PageSlug",
    component: PageSlug,
    props: true, // This allows you to pass the dynamic segment as a prop to the component
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
