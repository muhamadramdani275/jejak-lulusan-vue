import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/main.css";

library.add(faUserSecret, faUser, faBars);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
