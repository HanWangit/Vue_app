import Vue from "vue";
import router from "./router/router.js";
import App from "./App";
// 1.1 导入路由的包
import VueRouter from "vue-router";
// 1.2 安装路由
Vue.use(VueRouter);

// 导入vue-resource的包
import VueResource from "vue-resource";
Vue.use(VueResource);

//导入moment包, 实现时间格式化插件
import moment from "moment";
//定义全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})

Vue.config.productionTip = false;

// 导入外部mui样式
import "../lib/mui/css/mui.min.css";
import "../lib/mui/css/icons-extra.css";

//导入mintUi
import { Header, Swipe, SwipeItem, Button } from "mint-ui";
import { Lazyload } from "mint-ui";

//注册
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
//导入自己的样式文件
import "../css/common.less";

//设置全局请求根路径
Vue.http.options.root = "http://www.lovegf.cn:8899";
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
