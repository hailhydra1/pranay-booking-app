import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'https://umotel-flieq5tlm-pranay-singhs-projects.vercel.app/'
    }
  },
  plugins: [react()],
})
