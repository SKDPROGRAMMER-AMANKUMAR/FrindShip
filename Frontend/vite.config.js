import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  chunkSizeWarningLimit: 1000, // increase the limit (in KB)
})
