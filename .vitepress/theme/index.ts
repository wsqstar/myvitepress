// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    googleAnalytics({
      id: 'G-6WB1V46D8F', //跟踪ID，在analytics.google.com注册即可
    })
  }
} satisfies Theme
