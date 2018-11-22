# Vue_app
vue实现的项目,用到了mint-ui和mui两种框架,帮助快速完成页面视图效果
##运行方式
1. npm install
2. npm run dev (端口是8080,如有冲突,请自行修改端口号)

##制作App.vue组件
1. 完成了header部分,用的是mint-ui中的header组件
2. 完成了Tabbar部分,用的是mui中的底部选项卡,稍微改一下样式
3. 放置一个 router-view 来展示路由匹配到的组件
4. 点击 tabbar 中的路由链接，展示对应的路由组件

##制作home组件
1. 完成了swiper轮播图部分,由于接收不到后台图片,(才暂时随便用的图代替)
2. 完成九宫格部分, 用的是mui中的9宫格

##制作 新闻模块
1. 制作了新闻列表,主要是渲染数据
2. 制作了新闻详情
3. 评论部分做了个公共的组件,之后也有页面需要评论功能`components/comment.vue`
