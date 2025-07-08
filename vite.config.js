import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
   server: {
    host: '0.0.0.0', // Allow external connections
    allowedHosts: [
      'allocation-worthy-graduates-pulling.trycloudflare.com' // Add this line
    ]
  }
})