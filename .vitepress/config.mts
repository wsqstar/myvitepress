import { defineConfig } from 'vitepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GIStudy",
  description: "GIStudy, Study GIS",
  themeConfig: {
    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'N7N6JKLERR',
        apiKey: 'b49d86b14fc3dc576544cb814f5ecdff',
        indexName: 'gistudy',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GIS教程', link: '/gis/index' },
      { text: 'Kimi', link: 'https://kimi.moonshot.cn/' },
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
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '我的产品使用记录', link: 'dev/my_thoughts_on_applications' }
        ]
      },
      {
        text: '推荐',
        items: [
          { text: 'zetatechs-GPT', link: 'https://api.zetatechs.com/register?aff=hiqf' },
          { text: '关于', link: 'README' },
          { text: 'NAV', link: '/nav/' }

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
  },
  sitemap: {
    hostname: 'https://docs.gistudy.net'
  },
  head:[
    ['meta', { name: 'google-site-verification', content: 'Af8UU5z2Ja3SCGuLZHB_-FL20oWWcDqDu4U13ko_esI' }]
  ]
})
