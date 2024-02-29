import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const port = process.env.PORT || 3000;

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
    port, // Specify the desired port number
  },
});
