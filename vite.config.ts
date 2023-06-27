import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/client"),
    },
  },

  // Required to have Vite properly handle these CommonJS imports
  optimizeDeps: {
    include: [
      'sharedb-client-browser/dist/sharedb-client-umd.cjs',
      'sharedb-client-browser/dist/ot-json1-presence-umd.cjs',
    ],
  },
})
