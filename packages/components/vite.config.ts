import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

import { NAME } from '../../constants'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: resolve(__dirname, `./dist`),
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: NAME,
      formats: ['es','umd'],
      fileName: 'index.min'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },

        assetFileNames: 'index.min[extname]'
      },
      input: resolve(__dirname, './src/index.ts')
    }
  }
})
