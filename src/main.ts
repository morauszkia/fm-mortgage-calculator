import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/tailwindcss";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses({}),
      },
    })
  )
  .mount("#app");
