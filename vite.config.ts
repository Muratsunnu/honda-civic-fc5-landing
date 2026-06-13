import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages projeyi /<repo-adı>/ alt yolundan sunduğu için
// production build'de base ayarlanır; geliştirmede kökte kalır.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/honda-civic-fc5-landing/' : '/',
  plugins: [react()],
}))
