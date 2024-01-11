import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://doc.emsrs.site",

  author: {
    name: "emsrs",
    url: "https://emsrs.site",
  },
  // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
  iconAssets: "fontawesome-with-brands",
  // iconPrefix: "iconfont icon-",
  repo: "emersers/emsrs.doc",

  docsDir: "docs",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Search", "Repo", "Outlook"],
  },
  editLink: false,

  locales: {
    // Chinese locale config
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
    
    // English locale config
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
    sitemap: {
      hostname: "doc.emsrs.site",
      changefreq: "daily",
    },
    copyright: {
      author: "emsrs @2023",
      license: "MIT",
    },
    copyCode: {
      showInMobile: true,
    },
    components: {
      // 你想使用的组件
      components: [
        "BiliBili",
        ],
    },
    searchPro: {
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "分类：$content",
            "/en": "Category: $content",
          },
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "标签：$content",
            "/en": "Tag: $content",
          },
        },
      ],
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
  },
});
