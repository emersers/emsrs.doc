import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
  ],
  "/notes/":
    [
      {
        text: "笔记",
        icon: "font-awesome",
        link: "/notes/",
        prefix: "/notes/",
        collapsible: false,
        children: [
          {
            text: "chaos",
            icon: "laptop-code",
            link: "/notes/chaos/",
          },
          {
            text: "Java",
            icon: "laptop-code",
            link: "/notes/java/",
          },
          {
            text: "Solve",
            icon: "laptop-code",
            link: "/notes/solve/",
          },
          {
            text: "System",
            icon: "laptop-code",
            link: "/notes/sys/",
          },
        ],
      },
   ],

  "/notes/solve/":
    [
      {
        text: "Solve",
        icon: "font-awesome",
        link: "/notes/solve/",
        children: "structure",
      }
    ],
  "/notes/java/":
    [
      {
        text: "java",
        icon: "font-awesome",
        link: "/notes/java/",
        children: "structure",
      }
    ],
  "/notes/chaos/":
    [
      {
        text: "Chaos",
        icon: "font-awesome",
        link: "/notes/chaos/",
        children: "structure",
      }
    ],
  "/notes/sys/":
    [
      {
        text: "System",
        icon: "font-awesome",
        link: "/notes/sys/",
        children: "structure",
      }
    ],


  "/docs/":
    [
      {
        text: "文档",
        icon: "book",
        link: "/docs/",
        prefix: "/docs/",
        children: [
          {
            text: "抽卡记录",
            icon: "laptop-code",
            prefix: "gacha/",
            link: "gacha/",
            children: "structure",
          },
          {
            text: "Bot",
            icon: "robot",
            link: "bot/",
          },
          "theme/",
        ],
      }
    ],
  "/docs/bot/":
    [
      {
        text: "bot",
        icon: "robot",
        link: "/docs/bot/",
        children: "structure",
      }
    ],
  "/docs/theme/":
    [
      {
        text: "功能",
        icon: "laptop-code",
        link: "/docs/theme/",
      },
      {
        text: "案例",
        icon: "laptop-code",
        link: "demo/",
        prefix: "demo/",
        children: "structure",
      },
    ],
  "/docs/gacha/": [
    {
      text: "抽卡记录",
      icon: "laptop-code",
      link: "/docs/gacha/",
      children: "structure",
    },
  ],
  "/sitenav/":
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
    ]
});