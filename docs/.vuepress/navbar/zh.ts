import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text:"主题相关",
    icon: "lightbulb",
    link: "https://theme-hope.vuejs.press/zh/",
    prefix: "/theme/",
    children: [
      {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",        
      },
      {
        text: "功能与配置演示",
        icon: "lightbulb",
        link: "demo/",
      },      
    ],
  },
  
  {
    text: "APP",
    // icon: "iconfont-select",
    link: "https://app.emsrs.site",
  },
]);
