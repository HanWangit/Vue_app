import Router from "vue-router";

import homeComponent from "./home";
import memberComponent from "./member";
import searchComponent from "./search";
import shopcarComponent from "./shopcar";
import newsListComponent from "./news/newsList.vue";
import newsInfoComponent from "./news/newsInfo.vue";
import photoListComponent from "./photos/photoList.vue";

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: homeComponent },
    { path: "/member", component: memberComponent },
    { path: "/search", component: searchComponent },
    { path: "/shopcar", component: shopcarComponent },
    { path: "/home/newsList", component: newsListComponent },
    { path: "/home/newsInfo/:id", component: newsInfoComponent },
    { path: "/home/photoList", component: photoListComponent },
    // { path: "/home/photoInfo/:id", component: photoInfoComponent }
  ],
  linkActiveClass: "mui-active"
});
