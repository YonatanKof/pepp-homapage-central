import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/abstracts" as *; @use "./src/styles/components" as *;`,
      },
    },
  },
  plugins: [vue()]
})