import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faCreditCard,
  faGamepad,
  faGlobe,
  faAddressBook,
  faAddressCard,
  faPlus,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "./router";
import store from "./store";
import App from "./App.vue";

library.add(
  faUserCircle,
  faCreditCard,
  faGamepad,
  faGlobe,
  faAddressBook,
  faAddressCard,
  faPlus,
  faLock
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy);
new Vue({
  router,
  store,
  el: "#app",
  render(h) {
    return h(App);
  }
});
