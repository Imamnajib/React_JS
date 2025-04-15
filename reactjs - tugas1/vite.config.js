import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Set host ke 0.0.0.0 untuk akses dari perangkat lain
    port: 5173,  // Port yang digunakan
  },
})