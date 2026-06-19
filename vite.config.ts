import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/aurelia-3d/', // <-- Tambahkan baris ini (sesuaikan dengan nama repo)
})
