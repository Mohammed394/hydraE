import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainMenu from "../views/MainMenu.vue";
const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/Main",
      name: "defaultview",
      component: MainMenu,
    },
    {
      path: "/",
      name: "LoginView",
      component: LoginView,
      redirect: "/Main",
    },
  ],
});

export default router;
