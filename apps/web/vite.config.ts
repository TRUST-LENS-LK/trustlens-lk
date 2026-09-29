import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: '../../',
  server: {
    port: 5174,
  },
  build: {
    cssMinify: 'esbuild', // avoid lightningcss native binary issues on Linux CI
  },
})
