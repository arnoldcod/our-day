import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Allow external access for dev server
    port: 5173         // Optional: You can specify a port
  },
  preview: {
    host: '0.0.0.0',   // Ensure preview server also binds to 0.0.0.0
    port: 5173         // Optional: Ensure consistent port
  }
})
