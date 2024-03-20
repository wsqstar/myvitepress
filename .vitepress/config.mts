import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GIStudy",
  description: "GIStudy, Study GIS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VitePress Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '强化学习',
        items: [
          { text: '介绍', link: '/rl/index' },
          {text:'强化你的强化学习',link: 'https://wsqstar.github.io/reinforceyourRL'},
        ]
      },
      {
        text: 'GIS',
        items: [
          { text: '介绍', link: '/gis/index' },
          { text: 'GISphere留学指南', link: 'https://gisphere.info/school/zh' },
        ]
      },
      {
        text: '推荐',
        items: [
          { text: 'zetatechs', link: 'https://api.zetatechs.com/register?aff=hiqf' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsqstar/myvitepress' },
      {icon:'twitter', link:'https://twitter.com/wangshiqi1998'}
    ]
  }
})
