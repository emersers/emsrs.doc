import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "note",
      icon: "book",
      prefix: "note/",
      // collapsible: true,
      children: "structure",
    },    
  ],  
  "/bot/":
  [
    "",
  ],
  "/theme/":
  [
    "",
    {
      text: "主题相关",
      icon: "laptop-code",
      collapsible: true,
      children: "structure",
    },
  ],
  "/code/":
  [
    "",
  ],
  "/about/":
  [
    "",
    "sponsor",
  ],
});