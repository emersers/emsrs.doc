import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
  ],  
  "/bot/":
  [
    {
      text: "bot",
      icon: "robot",
      link: "/bot",      
    },
    {
      text: "yunzai-bot",
      icon: "laptop-code",
      prefix: "yunzai/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "nonebot",
      icon: "laptop-code",
      prefix: "nonebot/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/note/":
  [
    {
      text: "note",
      icon: "book",
      link: "README.md",
      children: "structure",
    }
  ],
  "/theme/":
  [
    {
      text: "功能",
      icon: "laptop-code",
      link: "/theme",
    },
    {
      text: "案例",
      icon: "laptop-code",
      // collapsible: true,
      link: "demo.md",
      prefix: "demo/",
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