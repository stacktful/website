import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    // Month and year of the build, shown in the footer (e.g. "Nov 2026").
    __BUILD_DATE__: JSON.stringify(
      new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
    ),
  },
  base: "./",
  server: { port: 3000 },
  build: { outDir: "build" },
});
