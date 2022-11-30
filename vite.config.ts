import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',
  base: '/modules/testytest/',
  publicDir: false,
  server: {
    port: 30001,
    open: '/game',
    proxy: {
      '^(?!/modules/testytest/)': 'http://localhost:30000',
      '/socket.io': { target: 'ws://localhost:30000', ws: true }
    }
  },
  build: {
    outDir: __dirname,
    emptyOutDir: false,
    lib: {
      entry: './main.ts',
      formats: ['es'],
      fileName: 'main'
    }
  },
  plugins: [svelte()]
})
