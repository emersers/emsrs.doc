import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "themefile/demo/",
      link: "themefile/demo/",
      collapsible: true,
      children: "structure",
    },    
    "slides",
    "sponsor",
  ],
});
