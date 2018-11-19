import Router from "vue-router";

import homeComponent from "./home";
import memberComponent from "./member";
import searchComponent from "./search";
import shopcarComponent from "./shopcar";

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: homeComponent },
    { path: "/member", component: memberComponent },
    { path: "/search", component: searchComponent },
    { path: "/shopcar", component: shopcarComponent }
  ],
  linkActiveClass: "mui-active"
});
