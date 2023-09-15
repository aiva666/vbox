# @aiva/vbox

> vue3组件库开发工具

## 目录结构

```
<!-- prettier-ignore -->
@aiva/vbox
│  .gitignore
│  package.json
│  pnpm-lock.yaml
│  pnpm-workspace.yaml
│  README.md
│
├─node_modules
├─build  构建产物目录
└─packages  工作空间
    ├─docs  组件文档项目
    │  │  package.json
    │  ├─.vitepress
    │  │  │  .gitignore
    │  │  │  config.ts  vitepress 配置
    │  │  ├─cache
    │  │  └─theme  vitepress 主题配置
    │  │      │  index.ts
    │  │      │
    │  │      └─styles  样式
    │  │              base.css
    │  │              default.css
    │  │              main.css
    │  │              var.css
    │  ├─docs  文档目录
    │  │  │  index.md
    │  │  ├─component
    │  │  └─guide
    │  └─node_modules
    └─pro-element  组件开发项目
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
        ├─components  组件开发目录
        ├─node_modules
        └─types  ts类型目录
                index.ts
```

## 开发

- 进入packages/docs项目，运行 `pnpm dev`
- 修改packages/pro-element代码，docs项目会热更新

## 构建

### 构建组件库

进入packages/pro-element目录，运行 `pnpm build`

### 构建文档

- 进入packages/docs项目，运行 `pnpm build`
