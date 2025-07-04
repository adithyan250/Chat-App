import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"http://localhost:8000"
      }
    }
  }
})
