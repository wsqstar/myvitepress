# 如何选择自己的在线文档发布器
根据自己的经济情况。
- 我选择vitepress
https://vitepress.dev/zh/

- 有很多的学习教程,推荐:

本文将介绍如何快速搭建一个网站.
将尝试使用vuepress


## 环境准备
> 不推荐使用pnpm 尤其是想要直接搭建的时候
> 使用npm反而会对GitHub这样的网站有帮助 因为部署更方便
- 安装 vitepress
	- 根据提示选择即可
	- ![alt text](<Pasted image 20240320143531.png>)
### 尝试运行
```
npm run docs:dev
```

![alt text](<Pasted image 20240320143805.png>)
效果尚可
## 尝试发布GitHub
> 参考 [部署 VitePress 站点 | VitePress](https://vitepress.dev/zh/guide/deploy) 
- 去使用 #网站托管服务 [Vercel – Vercel](https://vercel.com/shiqis-projects-2c9efbee)
- vercel的教程可能需要稍微修改一下 因为站点是一个独立站点 所以需要关注docs等文字

## 修改域名
- 前往 [腾讯云 - 值得信赖 (tencent.com)](https://cloud.tencent.com/)  将域名解析上去
- 尝试使用 gistudy.net
- 域名解析
	- 直接根据vercel的讲解解析就好
	- 不需在GitHub上额外设置 
- #个人品牌/个人网站/GIStudy  （这个tag是obsidian的tag）

## 参考
> - https://blog.csdn.net/AdminGuan/article/details/127620994
> - 美化  [Vuepress+Vercel 搭建个人站点 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/359899236)
> - https://juejin.cn/post/7164276166084263972
> - https://blog.csdn.net/ox4f5da2/article/details/128992515
> - https://vercel.com/ 网站托管真的好用！