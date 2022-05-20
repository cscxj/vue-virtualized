import path from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  root: 'play',
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'core')
    }
  }
})
