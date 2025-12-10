---
title: 再再再再战spring-boot，但是ruoyi框架
date: 2025-07-30 11:39:16
excerpt: "公司暂时没前端工作了，最终还是要全栈牛吗？哈基zhi，为了活下来"
thumbnail: https://s21.ax1x.com/2025/07/30/pVYv3VS.png
tags: 
    - "学习笔记"
    - "后端"
categories: 
    - "学习笔记"
    - "2025年"
    - "7月"
---


{% note info  %}
从我的角度切入，一个前端，拿到后端框架， 最开始应该做什么？一头雾水，于是开始从了解框架目录，刮地皮，Trae启动！（该说不说，这时候Trae就格外适合。看的真犯困🥱）
{% endnote %}

### 根目录`pom.xml`（Maven）文件

- <artifactId>包裹的就是这个配置文件的命名
- 存有整个项目的依赖
- ruoyi是多模块项目，<modules>定义了各个模块
- 根目录存了全局依赖版本号，不需要各个模块再定义，防止版本冲突
- ruoyi控制层`controller`统一放在了ruoyi-admin了，其他分模块都定义各自的业务服务层`service`、数据层`mapper`、实体类`domain`
   >  前端->>Controller: HTTP请求
   >  控制器->>Service: 调用业务方法
   >  Service->>Mapper: 执行数据库操作
   >  Mapper->>数据库: SQL执行
   >  数据库-->>Mapper: 返回数据
   >  Mapper-->>Service: 返回Entity
   >  Service-->>Controller: 返回DTO
   >  Controller-->>前端: 返回AjaxResult

### `application.xml`文件


### 入口启动文件
- ~~跟踪 SpringApplication.run() 执行流程~~(吹牛逼呢)

### mybatis

