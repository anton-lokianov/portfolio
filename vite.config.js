import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react({
      // Enables the fast refresh plugin for React
      fastRefresh: true,
      // Reduces the size of the React import in your output chunks
      removeDevtoolsInProd: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
  build: {
    // Optimize the chunking to create smaller chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Divide React and other vendor modules into separate chunks
          if (id.includes("node_modules")) {
            return id.includes("react") ? "react" : "vendor";
          }
          return "index";
        },
      },
    },
    // Increase the chunk size warning limit
    chunkSizeWarningLimit: 700,
  },
});
