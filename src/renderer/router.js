import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SplashScreen from "./views/SplashScreen.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/sc",
      name: "splash-screen",
      component: SplashScreen
    },
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
