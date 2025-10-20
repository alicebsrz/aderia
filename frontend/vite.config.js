import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'; // 1. Importar

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(), // 2. Adicionar o plugin
  ],
})

