---
home: true
# icon: home
title: 主页
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: doc-emsrs
tagline: 🚀emersers 知识管理&博客
actions:
  - text: To be Continue →
    link: ./demo/
    type: primary

  - text: 使用指南 💡
    link: ./demo/
    type: primary

  - text: 文档
    link: ./guide/

highlights:
  - header: 易于安装
    image: /assets/image/box.svg
    # bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
      - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: 在 Markdown 中添加你想要的内容
    description: 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 链接检查
        icon: clipboard-check
        details: 检查 Markdown 链接
        link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check

      - title: 自定义容器支持
        icon: box-archive
        details: 用样式装饰 Markdown 内容
        link: https://theme-hope.vuejs.press/zh/guide/markdown/container.html

copyright: © 2023 emersers
footer: <a href="https://doc.emsrs.site">doc.emsrs.site</a> | MIT
---