import { ViteSSG } from "vite-ssg";
import { UserModule } from "./types";
import { routes } from "./router";

import App from "./App.vue";

import "virtual:windi.css";
import "virtual:fonts.css";

export const createApp = ViteSSG(App, {
  routes,
  base: "/"
}, (context) => {
  //context.app.use(router);

  //Install modules from modules directory
  Object.values(import.meta.globEager("./modules/*.ts")).forEach(i => {
    if(Object.hasOwn(i, "install") && typeof i.install == "function") {
      (i.install as UserModule)(context);
    }
  });
});