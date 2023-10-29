import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    "sponsor",
    {
      text: "主题相关",
      icon: "laptop-code",
      prefix: "theme/",
      // link: "theme/README",
      collapsible: true,
      // children: "structure",
      children: [
        "README",
        {
          text: "案例",
          icon: "",
          prefix: "demo/"
        },
        "slides",

      ],
    },    
  ],
});
