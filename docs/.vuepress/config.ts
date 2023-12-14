import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "script",
      {},
      `\
        // 监听页面可见性变化事件
        document.addEventListener("visibilitychange", () => {
          const prefix = "多看一眼就会 | ";
          const CurrentTitle = document.title;
          let isHidden = false;

          if (document.hidden) {
            document.title = prefix + CurrentTitle;
            isHidden = true;
          } else {
            if (CurrentTitle.startsWith(prefix)) {
              isHidden = false;
            }
            if(!isHidden)
              document.title = CurrentTitle.substring(prefix.length);
          }
        });
      `,
    ],    
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "emsrs'docs",
      description: "emsrs'docs",
    },
    
    "/en/": {
      lang: "en-US",
      title: "emsrs'docs",
      description: "emsrs'docs",
    },    
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
  

});