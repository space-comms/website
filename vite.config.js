import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for custom domain
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    host: true
  }
})
