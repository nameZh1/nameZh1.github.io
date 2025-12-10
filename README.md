# 环境准备 

***date：2025年7月30日***

- 依赖直接解压用不了，还是要instal

***date：2024年10月10日***

- 安装hexo
```shell
# 全局
$ npm install -g hexo-cli
# 局部
npm install hexo
```

- 启动本地服务器（默认 http://localhost:4000）
```shell
hexo server
# 简写
hexo s

# 启动服务器并监听文件变化
hexo s --watch
```

- 内容管理
```shell
# 创建新文章
hexo new "文章标题"
# 简写
hexo n "文章标题"

# 创建草稿（不会发布）
hexo new draft "草稿标题"

# 发布草稿
hexo publish draft "草稿标题"



# 生成静态文件到 public 目录
hexo generate
# 简写
hexo g

# 生成文件后立即启动服务器
hexo g && hexo s



# 清除缓存和已生成文件
hexo clean


```