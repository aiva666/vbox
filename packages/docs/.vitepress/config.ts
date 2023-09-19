import { defineConfig } from "vitepress"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin"
import {resolve} from 'path'

import { DIR_NAME, NAME } from "../../../constants"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: NAME,
  description: "Vue3组件库开发工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/intro", activeMatch: "/guide" },
      {
        text: "组件",
        link: "/components/",
        activeMatch: "/components",
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "按钮",
          link: "/components/btn/",
        },
      ],
    },
    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
  /** 相对于docs文件夹 */
  srcDir: "./docs",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  vite: {
    plugins: [vueJsx()],
    resolve:{
      alias:[
        {
          find:DIR_NAME,
          replacement:resolve(__dirname,'../../components/src/index.ts')
        }
      ]
    }
  },
})
