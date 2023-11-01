import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "emsrs",
    url: "https://emsrs.site",
  },
  // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
  iconAssets: "fontawesome-with-brands",
  // iconPrefix: "iconfont icon-",

  fullscreen: true,

  repo: "emersers/emsrs.doc",

  docsDir: "docs",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Search", "Repo", "Outlook"],
  },

  locales: {
    
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      // footer
      displayFooter: true,
      copyright: "copyright© 2023 <a href=\"https://emsrs.site\" target=\"_blank\">emsrs</a>",
      footer: "<a href=\"/about/\">关于</a>",
      
      // page meta
      metaLocales: {
        editLink: "编辑",
      },
    },
    
    
    "/en/": {
      // navbar
      navbar: enNavbar,
      
      // sidebar
      sidebar: enSidebar,
      
      // footer
      displayFooter: true,
      copyright: "copyright© 2023 <a href=\"https://emsrs.site\" target=\"_blank\">emsrs</a>",
      footer: "<a href=\"/about/\">about</a>",

      metaLocales: {
        editLink: "Edit",
      },
    },

  },

  encrypt: {
    config: {
      "/theme/demo/encrypt.html": ["1234"],
      "/en/theme/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    copyright: {
      author: "emsrs @2023",
      license: "MIT",
    },
    // You should generate and use your own comment service
    /* comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    }, */

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      /* revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: "auto",
      }, */
      revealJs: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         docs: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         docs: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         docs: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         docs: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             docs: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
