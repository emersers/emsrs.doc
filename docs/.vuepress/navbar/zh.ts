import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "font-awesome",
    link: "/note/",
  },
  {
    text: "code",
    icon: "code",
    link: "/code/",
  },
  {
    text: "Bot",
    icon: "robot",
    link: "/bot/",
  },
  {
    text: "网址导航",
    icon: "circle-nodes",
    link: "/sites/",
  },
  {
    text: "APP",
    icon: "share-from-square",
    link: "https://app.emsrs.site",
  },
]);
