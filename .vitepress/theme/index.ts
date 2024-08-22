// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import MNavLinks from './components/MNavLinks.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    googleAnalytics({
      id: 'G-6WB1V46D8F', //跟踪ID，在analytics.google.com注册即可
    }),
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'wsqstar/myvitepress', //仓库
      repoId: 'R_kgDOLi0Baw', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOLi0Ba84CeG4j', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  }
} satisfies Theme
