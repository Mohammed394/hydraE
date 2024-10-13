import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/local': {
        target: 'http://localhost:8060',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Copy all headers from the original request to the proxy request
            Object.keys(req.headers).forEach(key => {
              proxyReq.setHeader(key, req.headers[key]);
            });
          });
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
