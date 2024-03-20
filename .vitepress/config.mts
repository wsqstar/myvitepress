import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GIStudy",
  description: "GIStudy, Study GIS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GIS教程', link: '/gis/index' },
      {text:'Kimi',link:'https://kimi.moonshot.cn/'},
    ],

    sidebar: [
      {
        text: '强化学习',
        items: [
          { text: '介绍', link: '/rl/index' },
          { text: '强化你的强化学习', link: 'https://wsqstar.github.io/reinforceyourRL' },
          { text: '深度强化学习', link: '/rl/DQN' }
        ]
      },
      {
        text: 'GIS',
        items: [
          { text: '介绍', link: '/gis/index' },
          { text: 'GISphere留学指南', link: 'https://gisphere.info/school/zh' },
          { text: '关注的项目', link: '/gis/projects' },

        ]
      },
      {
        text: 'Dev',
        items: [
          { text: '开发环境选择', link: '/dev/choice_on_wsl_or_colab' },
          { text: 'Vitepress教程', link: '/dev/how_to_find_a_online_docs_publisher' },
          { text: 'Python教程', link: '/dev/suggestion_python_study' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '推荐',
        items: [
          { text: 'zetatechs-GPT', link: 'https://api.zetatechs.com/register?aff=hiqf' },
          { text: '关于', link: 'README' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsqstar/myvitepress' },
      { icon: 'twitter', link: 'https://twitter.com/wangshiqi1998' }
    ],

  },
  markdown: {
    math: true
  }
})
