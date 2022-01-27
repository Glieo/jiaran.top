import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { SourceMap } from "magic-string";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  build: {
    assetsInlineLimit: 65536,
  },
});
