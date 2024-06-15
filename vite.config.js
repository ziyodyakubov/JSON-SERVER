import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@routes', replacement: '/src/router'},
      { find: '@components', replacement: '/src/components'},
      { find: '@images', replacement: '/src/assets/images/index.jsx'},
      { find: '@modal', replacement: '/src/components/modal'},
    ]
  }
})
