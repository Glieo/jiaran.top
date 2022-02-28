import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    assetsInlineLimit: 65536,
  },

  plugins: [
    vue(),

    VitePWA({
      includeAssets: [
        "404.html",
        "robots.txt",
        "favicon.ico",
        "browserconfig.xml",
        "img/favicon.svg",
        "img/favicon_404.ico",
        "img/favicon-16x16.png",
        "img/favicon-32x32.png",
        "img/mstile-150x150.png",
        "img/apple-touch-icon.png",
      ],
      manifest: {
        name: "Dianananananana...",
        short_name: "Jiaran Top!",
        description: "Jiaran is 1.8 meters high! Jiaran is top!",
        theme_color: "#ffffff",
        icons: [
          {
            src: "img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
