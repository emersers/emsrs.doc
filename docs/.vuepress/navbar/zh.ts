import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "book",
    link: "/note/",
  },
  {
    text: "Bot相关",
    icon: "lightbulb",
    link: "/bot/",
  },
  {
    text: "网址导航",
    icon: "lightbulb",
    link: "/sites/",
  },
  {
    text: "vercel",
    icon: "laptop-code",
    link: "https://vercel.com/emersers/emsrsdoc/",
  },
  {
    text: "APP",
    // icon: "iconfont-select",
    link: "https://app.emsrs.site",
  },
]);
