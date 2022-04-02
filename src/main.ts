import { UserModule, UserModuleContext } from "./types";

import { createApp } from "vue";
import App from "./App.vue";

import "virtual:windi.css";
import "virtual:fonts.css";

const app = createApp(App);

//Install modules from modules directory
Object.values(import.meta.globEager("./modules/*.ts")).forEach(i => {
  if(Object.hasOwn(i, "install") && typeof i.install == "function") {
    const context: UserModuleContext = {
      application: app
    };

    (i.install as UserModule)(context);
  }
});

app.mount("#app");
