import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuration Vite : on ajoute simplement le plugin Tailwind CSS (v4).
// Avec la v4, plus besoin de tailwind.config.js ni de postcss.config.js :
// tout se règle directement dans le fichier CSS (voir src/index.css).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
