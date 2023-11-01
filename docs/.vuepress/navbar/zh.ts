import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "code",
    icon: "code",
    link: "/code/",
  },
  {
    text: "note",
    icon: "font-awesome",
    link: "/note/",
  },
  {
    text: "Bot",
    icon: "robot",
    link: "/bot/",
  },
  {
    text: "网址导航",
    icon: "circle-nodes",
    link: "/webnav/",
  },
  {
    text: "APP",
    icon: "share-from-square",
    link: "https://app.emsrs.site",
  },
]);
