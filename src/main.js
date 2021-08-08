import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faHeart as faHeartOutline,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faHome,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faSearch,
  faHome,
  faCompass,
  faHeartSolid,
  faHeartOutline,
  faFacebookMessenger
);
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
