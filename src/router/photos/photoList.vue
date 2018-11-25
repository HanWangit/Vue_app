<template>
    <div class="photo-container">
      <!-- 加载分类标题 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                  <a :class="{'mui-control-item':true, 'mui-active':item.id==0}" v-for="(item) in imgCategories" :key="item.id" @tap="getImgList(item.id)">
                    {{item.title}}
                  </a>
                </div>
            </div>
        </div>

      <!-- 加载图片 -->
      <ul class="lazy_img">

        <router-link :to="'/home/photoInfo/'+item.id" v-for="item in imgList" :key="item.id" tag="li">
          <img v-lazy="item.img_url" >
          <div class="info">
            <h1 class="info-title">{{ item.title }}</h1>
            <div class="info-body">{{ item.zhaiyao }}</div>
          </div>
        </router-link>
      </ul>
    </div>
</template>
<script>
import mui from "../../../lib/mui/js/mui.min.js";  
import {Toast} from "mint-ui";
export default {
  data(){
    return{
      imgCategories:[],
      imgList:[]
    }
  },
  created(){
    this.getImgCategory()
    this.getImgList(0)
  },
  methods:{
    getImgCategory(){
      this.$http.get('api/getimgcategory').then(result=>{
        if (result.body.status == 0) {
          this.imgCategories = result.body.message;
          // 手动添加全部类
          this.imgCategories.unshift({title:'全部',id:0})
        } else {
          // 失败的
          Toast("加载分类标题失败");
        }
      })
    },
    getImgList(cateid){
      this.$http.get('api/getimages/'+cateid).then(result=>{
        if (result.body.status == 0) {
          this.imgList = result.body.message;
        } else {
          // 失败的
          Toast("加载分类标题失败");
        }
      })
      
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0006 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="less">

.lazy_img{
  padding: 10px;
  width: 100%;
  li{
    background-color: #ccc;
    margin-bottom: 10px;
    position: relative;
    img{
      width: 100%;
      vertical-align:middle;
      text-align: center;
      box-shadow: 0 0 9px #999;
    }
    .info {
      width: 100%;
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
  img[lazy=loading] {
    width: 100%;
    margin: auto;
    background-color: #ccc;
  }
  img[lazy=error]{
    background-color: pink;
  }
}

</style>

