import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // home
  "/",
  // notes
  {
    text: "笔记",
    icon: "font-awesome",
    link: "/notes/",
  },
  // docs
  {
    text: "docs",
    icon: "book",
    link: "/docs/",
  },
  // sitenav
  {
    text: "站点导航",
    icon: "circle-nodes",
    link: "/sitenav/",
  },
  // blog
  {
    text: "博客",
    icon: "link",
    link: "https://emsrs.site",
  },
  // apps
  {
    text: "APP",
    icon: "share-from-square",
    link: "https://app.emsrs.site",
  },
]);
