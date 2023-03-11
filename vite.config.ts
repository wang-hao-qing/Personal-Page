import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown' 
import { resolve } from 'path'
// const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown()
  ],  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }
  /* resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  } */
})
