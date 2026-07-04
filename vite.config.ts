import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              "vendor-react": ["react", "react-dom", "react-router-dom"],
              "vendor-ui": ["framer-motion", "lucide-react"],
              "vendor-misc": ["react-helmet-async"],
            },
          },
        },
  },
}));
