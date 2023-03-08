import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown' 
// const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown()
  ],
  /* resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  } */
})
