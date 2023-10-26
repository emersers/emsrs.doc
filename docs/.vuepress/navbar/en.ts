import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/demo/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",    
    link: "/guide/",    
  },
  {
    text: "APP",
    icon: "../public/assets/icon/more-app.svg",
    link: "https://app.emsrs.site",
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
