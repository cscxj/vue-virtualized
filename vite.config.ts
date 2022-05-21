import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  root: 'play',
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'core')
    }
  },
  plugins: [vue()]
})
