import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'PPABAM',
  description: "빠밤 기술블로그. Let's all pay attention to climate change! PPABAM",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ppabam blog' }],
    ['meta', { property: 'og:description', content: "빠밤 기술블로그. Let's all pay attention to climate change! PPABAM" }],
    ['meta', { property: 'og:image', content: 'https://ppabam.github.io/images/repository-open-graph-ppabam.png' }],
    ['meta', { property: 'og:url', content: 'https://ppabam.sunsin.shop' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/bam2.png",
    logoDark: "/images/bam.png",

    // repo: "https://github.com/sunsin-shop/sunsin-shop.github.io/discussions",
    // repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "🚩 flag123", link: "https://flag123.gusuhan.shop" },
      { text: "📝 resume", link: "/resume/" },
    ],

    sidebar: {
      "/": [
        {
          text: "resume",
          collapsible: true,
          children: [
            "/resume/",
          ],
        },
        {
          text: "projects",
          collapsible: true,
          children: [
            "/projects/",
            // "/team/recruit/",
            // "/team/how2pr/",
            // "/team/tiger2agile/",
          ],
        },
        // {
        //   text: "opensource",
        //   collapsible: true,
        //   children: [
        //     "/tech/share/opensource/",
        //   ],
        // },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-8X1VF5FX6X",
      debug: true,
    }),
  ],

})
