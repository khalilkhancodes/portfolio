import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // We removed the 'root' line so it defaults to the main folder
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});