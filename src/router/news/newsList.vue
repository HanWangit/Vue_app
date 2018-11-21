<template>
    <div class="news-list-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id">
                <router-link to="/home/newsInfo">
                    <img class="mui-media-object mui-pull-left" src="../../img/menu1.png">
                    <div class="mui-media-body">
                        <h5 class="mui-ellipsis title">{{item.title}}</h5>
                        <p>
                            <span class="mui-pull-left">发表时间:  {{item.add_time}}</span>
                            <span class="mui-pull-left">点击: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    data(){
        return {
            newsList:[],
        }
    },
    created(){
        this.getnewsList();
    },
    methods:{
        getnewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status === 0){
                    this.newsList = result.body.message;
                }else{
                    Toast("新闻列表加载失败。。。");
                }
            })
        }
    }
    
}
</script>
<style lang="less">
.news-list-container{
    .mui-table-view-cell{
        .title{
            font-size: 14px;
            color: #000;
            font-weight: 700;
        }
        img{
            width: 100%;
            display: block;
        }
        p{
            font-size: 12px;
            color:#226aff;
        }
        
    }

}
</style>

