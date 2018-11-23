<template>
    <div class="photo-info-container">
        <h5 class="mui-ellipsis title">{{imgInfo.title}}</h5>
        <p class="clearfix">
            <span class="mui-pull-left">发表时间:  {{imgInfo.add_time | dateFormat}}</span>
            <span class="mui-pull-right">点击: {{imgInfo.click}}次</span>
        </p>
        <hr/>
        
        <!-- 图片预览 -->
        <img class="preview-img" v-for="(item, index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index, list)">

        <div class="content" v-html="imgInfo.content">
        </div>

        <!-- 评论区 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import comment from "../../components/comment.vue";

export default {
    data(){
        return{
            id: this.$route.params.id,
            imgInfo: {},
            // 图片加载不出来,这是模拟图片
            list: [{
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                w: 600,
                h: 400
            }, {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                w: 1200,
                h: 900
            }]
        }
    },
    created(){
        this.getImgInfo(),
        this.getThumImg()
    },
    methods:{
        getImgInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if (result.body.status == 0) {
                    this.imgInfo = result.body.message[0];
                    console.log(this.imgInfo)
                } else {
                    // 失败的
                    Toast("加载图片详情失败");
                }
            })
        },
        getThumImg(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                console.log(result);
            })
        }
    },
    components:{
        'cmt-box':comment
    }
}
</script>
<style lang="less">
.photo-info-container{
    padding: 4px;
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        color: crimson;
        margin: 10px 0;
    }
    >p{
        color: #26a2ff;
    }
    .content{
        line-height: 30px;
        font-weight: 700
    }
    >img{
        margin: 4px;
        box-shadow: 0 0 5px #ccc;
    }
}
</style>
