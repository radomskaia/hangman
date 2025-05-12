import postcssImport from "postcss-import";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    cssCodeSplit: false,
  },
  css: {
    postcss: {
      plugins: [postcssImport()],
    },
  },
});
