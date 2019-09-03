import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SplashScreen from "./views/SplashScreen.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "splash-screen",
      component: SplashScreen
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
