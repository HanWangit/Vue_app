<template>
    <mt-swipe class="swiper" :auto="4000">
        <mt-swipe-item v-for="(item,index) in swiperList" :key="index">
            <router-link to="">
                <img src="../img/banner1.jpg" alt="" srcset="">
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    props:['swiperList']
}
</script>
<style lang="less">
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
</style>
