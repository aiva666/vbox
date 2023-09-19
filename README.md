# @aiva/vbox

> vue3组件库和文档开发工具

## 目录结构

```
<!-- prettier-ignore -->
@aiva/vbox
│  .gitignore
│  package.json
│  pnpm-lock.yaml
│  pnpm-workspace.yaml
│  README.md
├─build  构建产物目录
└─packages  工作空间
    ├─docs  组件文档项目
    │  │  package.json
    │  ├─.vitepress
    │  │  │  .gitignore
    │  │  │  config.ts  vitepress 配置
    │  │  └─theme  vitepress 主题配置
    │  │      │  index.ts
    │  │      │
    │  │      └─styles  样式
    │  ├─docs  文档目录
    │  │  │  index.md 首页MD
    └─components  组件开发项目
        │  .eslintrc.cjs
        │  .gitignore
        │  .prettierrc.json
        │  env.d.ts
        │  index.ts
        │  package.json
        │  postcss.config.js
        │  README.md
        │  tailwind.config.js
        │  ts.build.info
        │  tsconfig.app.json
        │  tsconfig.json
        │  tsconfig.node.json
        │  vite.config.ts
        ├─assets  静态资源
        │  └─css
        ├─src  组件源码
```

## 快速开始

- 组件库名称

  1.  修改packages/components目录下的`package.json`文件，将 `name` 属性值替换为你的组件库名称 *小写，中划线连接*
  2.  修改constants目录下的 `index.ts` 文件，将 `NAME` 变量值修改为你的组件库名称 *大驼峰*

## 开发

- 进入packages/docs项目，运行 `pnpm dev`
- 修改packages/components代码，docs项目会热更新

## 构建

### 构建组件库

进入packages/components目录，运行 `pnpm build`

### 构建文档

- 进入packages/docs项目，运行 `pnpm build`
