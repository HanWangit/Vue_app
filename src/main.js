import Vue from "vue";
import router from "./router/router.js";
import App from "./App";
// 1.1 导入路由的包
import VueRouter from "vue-router";
// 1.2 安装路由
Vue.use(VueRouter);

import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.config.productionTip = false;

// 导入外部mui样式
import "../lib/mui/css/mui.min.css";
import "../lib/mui/css/icons-extra.css";

//导入mintUi
import { Header, Swipe, SwipeItem } from "mint-ui";

//注册
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

//导入自己的样式文件
import "../css/comment.less";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
