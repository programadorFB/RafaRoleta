import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash].css'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'text/css; charset=utf-8'
    }
  }
})