import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 5229 },
  plugins: [
    react(),
    TanStackRouterVite(),
    Unfonts({
      google: {
        families: [
          {
            name: "Poppins",
            styles: "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
            defer: true,
          },
          {
            name: "Noto Sans JP",
            styles: "ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700",
            defer: true,
          },
        ],
      },
    }),
  ],
});
