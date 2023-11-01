import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
  ],  
  "/bot/":
  [
    "",
  ],
  "/note/":
  [
    {
      text: "note",
      icon: "book",
      // collapsible: true,
      children: "structure",
    }
  ],
  "/theme/":
  [
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
  "/webnav/":
  [
    "",
  ],
  "/about/":
  [
    "",
    "sponsor",
  ],
});