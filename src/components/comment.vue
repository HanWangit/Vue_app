<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" v-model="comment"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
        <div class="cmt_list" v-for="(item,index) in commentList" :key="item.add_time">
            <div class="cmt_title">
                第{{index+1}}楼  用户：{{item.user_name}}  发表时间：{{item.add_time | dateFormat}}
            </div>
            <div class="cmt_content">{{item.content === "undefined"? "用户很懒,什么都没说":item.content}}</div>
        </div> 
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default{
    data(){
        return {
            pageIndex: 1,
            commentList:[],
            comment:''
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get('api/getcomments/'+this.id+"?pageindex=" + this.pageIndex).then(result=>{
                if (result.body.status == 0) {
                    this.commentList = this.commentList.concat(result.body.message);
                } else {
                    // 失败的
                    Toast("加载轮播图失败。。。");
                }
            })
        },
        //加载更多
        getMore(){
            this.pageIndex++
            this.getComments()
        },
        //提交评论
        postComments(){
            // 验证是否为空
            if(this.comment.trim().length===0){
               return Toast('评论不能为空')
            }
            this.$http.post('api/postcomment/'+this.id,{content: this.comment.trim()}).then(result=>{
                if (result.body.status == 0) {
                    this.pageIndex = 1;
                    this.commentList = []
                    this.getComments()
                } else {
                    // 失败的
                    Toast("评论失败");
                }
            })
            
            this.comment = ''
        }
        
    },
    props:['id']
}
</script>
<style lang="less">
.comment-container{
    textarea{
        height: 85px;
        margin: 5px 0;
        padding: 10px 15px;
        font-size: 14px;
    }
    .cmt_list{
        .cmt_title{
            height: 30px;
            line-height: 30px;
            background-color: #ccc;
        }
        .cmt_content{
            padding: 5px 0;
            text-indent: 2em;
        }
    }
}
</style>
