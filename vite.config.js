import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  base: "/xktrading/", // GitHub Pages base path
  build: {
    outDir: "docs", // Output to docs folder for GitHub Pages
  },
});
