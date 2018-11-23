<template>
    <div class="home_container">
        <!-- 轮播 -->
        <mt-swipe class="swiper" :auto="4000">
            <mt-swipe-item v-for="(item,index) in swiperList" :key="index">
                <router-link to="">
                    <img src="../../img/banner1.jpg" alt="" srcset="">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/newsList">
		                    <img src="../../img/menu1.png" />
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <img src="../../img/menu2.png" />
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu3.png" />
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                   <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu6.png" />
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
  data() {
    return {
      swiperList: []
    };
  },
  created() {
    this.getSwiperImg();
  },
  methods: {
    getSwiperImg() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status == 0) {
          this.swiperList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  }
};
</script>
<style lang="less">
.home_container {
  .swiper {
    height: 200px;
    .router-link{
      background-color: hotpink;
    }
    img,
    a {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img{
        width: 60px;
      }
      .mui-media-body{
        font-size: 13px;
      }
    }
  }
}
</style>