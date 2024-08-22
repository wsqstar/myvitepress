import { defineConfig } from 'vitepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GIStudy",
  description: "GIStudy, Study GIS",
  themeConfig: {
    logo: '/logo128.png',
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
      { text: 'GPT', link: 'https://chat.gistudy.net/' },
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
          { text: 'GIS001-GIS入门课', link: '/gis/GIS001/index' },
        ]
      },
      {
        text: 'Math',
        items: [
          { text: '介绍', link: '/math/index' },
          { text: '矩阵', link: '/math/matrix' },
        ]
      },
      {
        text: 'Dev',
        items: [
          { text: '开发环境选择', link: '/dev/choice_on_wsl_or_colab' },
          { text: 'Vitepress教程', link: '/dev/how_to_find_a_online_docs_publisher' },
          { text: 'Python教程', link: '/dev/suggestion_python_study' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: '我的产品使用记录', link: 'dev/my_thoughts_on_applications' }
        ]
      },
      {
        text: '推荐',
        items: [
          { text: 'zetatechs-GPT', link: 'https://api.zetatechs.com/register?aff=hiqf' },
          { text: '关于', link: 'README' },
          { text: '网址导航', link: '/nav/' },
          { text: 'GIS网址导航', link: 'https://nav.dippermap.com' },
          { text: '推荐的应用', link: '/ref/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsqstar/myvitepress' },
      { icon: 'twitter', link: 'https://twitter.com/wangshiqi1998' },
      { icon: {svg:
        `<?xml version="1.0" encoding="UTF-8"?>
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128.81 128.17">
          <defs>
            <style>
              .cls-1 {
                fill: url(#gradient3);
              }
        
              .cls-2 {
                fill: #000;
              }
        
              @media (prefers-color-scheme: dark) {
                .cls-2 {
                  fill: #fff;
                }
              }
            </style>
            <linearGradient id="gradient3" x1="57.54" y1="31.44" x2="128.81" y2="31.44" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#ff4d4d"/>
              <stop offset=".99" stop-color="#f9cb28"/>
            </linearGradient>
          </defs>
          <g id="b">
            <g>
              <path class="cls-2" d="M56.32,100.47c0,15.98-11.84,27.61-27.85,27.61S.33,116.45,.33,100.47s11.83-27.45,28.08-27.45,27.91,11.63,27.91,27.45Z"/>
              <path class="cls-2" d="M120,101.26v19.31c-4.87,4.63-12.9,7.6-21.65,7.6-18.33,0-30-10.49-30-26.7s12.92-28.34,31.07-28.34v28.13h20.58Z"/>
              <polygon class="cls-1" points="119.7 21.48 128.81 38.51 83.27 62.88 57.54 14.79 85.17 0 101.79 31.06 119.7 21.48"/>
              <polygon class="cls-2" points="0 63.11 16.54 32.82 .68 8.17 55.98 8.17 40.12 32.82 56.65 63.11 0 63.11"/>
            </g>
          </g>
        </svg>
        `
      }, link: 'https://shiqi.xlog.app' }
    ],

  },
  markdown: {
    math: true
  },
  sitemap: {
    hostname: 'https://docs.gistudy.net'
  },
  head:[
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo128.png' }],
    ['meta', { name: 'google-site-verification', content: 'Af8UU5z2Ja3SCGuLZHB_-FL20oWWcDqDu4U13ko_esI' }]
  ]
})
