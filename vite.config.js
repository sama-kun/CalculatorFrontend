import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // reactRefresh(),
  ],
  proxy: {
    "/": {
      target: "https://plankton-app-gascv.ondigitalocean.app", // адрес вашего сервера
      changeOrigin: true,
    },
  },
  server: {
    port: process.env.PORT, // Specify the desired port number
  },
});
