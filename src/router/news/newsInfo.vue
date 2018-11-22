<template>
    <div class="news-info-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p>
            <span class="mui-pull-left"> 发表时间: {{newsInfo.add_time | dateFormat }} </span>
            <span class="mui-pull-right"> 点击:  {{newsInfo.click}}  次 </span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content" >

        </div>

        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>
<script>
import Toast from "mint-ui"
import comment from "../../components/comment.vue"
export default {
    data(){
        return{
            id: this.$route.params.id,
            newsInfo:{}
        }
    },
    created(){
        this.getnewsInfo();
    },
    methods: {
        getnewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if (result.body.status == 0) {
                    this.newsInfo = result.body.message[0];
                } else {
                    // 失败的
                    Toast("加载轮播图失败。。。");
                }
            })
        }
    },
    components:{
        'cmt-box':comment
    }
}
</script>
<style lang="less">
.news-info-container{
    padding: 4px;
    >h3{
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 15px 0 15px 0;
    }
    >p{
        color:#226aff;
        font-size: 13px;
        overflow: hidden;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
