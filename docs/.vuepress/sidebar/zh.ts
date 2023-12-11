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
      prefix: "yz/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "抽卡记录",
      icon: "laptop-code",
      link: "/gacha/",
    },    
  ],
  "/note/":
  [
    {
      text: "note",
      icon: "book",
      link: "/note/",
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
      collapsible: true,
      link: "demo/",
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
    {
      text: "网址导航",
      icon: "laptop-code",
      link: "README.md",
      children: "structure",
  },
  ],
  "/about/":
  [
    "",
    "sponsor",
  ],
  "/gacha/":[
    {
      text: "抽卡记录",
      icon: "laptop-code",
      link: "/gacha/",
      children: "structure",
    },
  ]
});