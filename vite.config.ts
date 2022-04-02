import * as path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import ViteFonts from "vite-plugin-fonts";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

import "vite-ssg";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
    }),
    AutoImport({
      dts: "src/auto-import.d.ts",
      imports: ["vue", "@vueuse/head", "@vueuse/core", "vue-i18n", "vue-router"],
    }),
    ViteFonts({
      google: {
        families: ["Roboto", "Open Sans"],
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")]
    })
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
  }
});
