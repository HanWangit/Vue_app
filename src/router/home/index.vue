<template>
    <div class="home_container">
        <!-- 轮播 -->
        <mt-swipe class="swiper" :auto="4000">
            <mt-swipe-item v-for="(item,index) in swiperList" :key="index">
                <router-link to="">
                    <img :src="item.img" alt="" srcset="">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
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
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        console.log(result.body);
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
    img,
    a {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
}
</style>