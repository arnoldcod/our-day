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
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and React DOM into their own chunk
          'react-vendor': ['react', 'react-dom'],
          // Split router into its own chunk
          'router': ['react-router-dom'],
          // Split framer-motion into its own chunk (largest dependency)
          'framer-motion': ['framer-motion'],
          // Split i18n libraries into their own chunk
          'i18n': ['i18next', 'react-i18next'],
        },
      },
    },
    // Increase chunk size warning limit to 600kb
    chunkSizeWarningLimit: 600,
  },
})
