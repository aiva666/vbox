import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

import { NAME, DIR_NAME } from '../../constants'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: resolve(__dirname, `../../build/dist`),
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: NAME,
      formats: ['es'],
      fileName: `${DIR_NAME}.min`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },

        assetFileNames: `css/${DIR_NAME}.min[extname]`
      },
      input: resolve(__dirname, './index.ts')
    }
  }
})
