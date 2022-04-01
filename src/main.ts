import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";

import "virtual:windi.css";
import "virtual:fonts.css";

const app = createApp(App);
const head = createHead();

app.use(head).mount("#app");
