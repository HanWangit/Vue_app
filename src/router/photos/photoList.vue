<template>
    <div class="photo-container">
      <!-- 加载分类标题 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                  <a :class="{'mui-control-item':true, 'mui-active':item.id==0}" v-for="(item) in imgCategories" :key="item.id">
                    {{item.title}}
                  </a>
                </div>
            </div>
        </div>

      <!-- 加载图片 -->
    </div>
</template>
<script>
import mui from "../../../lib/mui/js/mui.min.js";
import {Toast} from "mint-ui";
export default {
  data(){
    return{
      imgCategories:[]
    }
  },
  created(){
    this.getImgCategory()
    this.getImgList()
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
    getImgList(){
      // this.$http.get('')
      
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

</style>

