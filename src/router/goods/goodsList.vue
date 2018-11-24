<template>
    <div class="goods-list-container">
        <div class="goods-item" v-for="(item) in goodsList" :key="item.id" @click="goDetails(item.id)">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2201717197,807677851&fm=26&gp=0.jpg" alt="">
            <!-- <img src="item.img_url" alt=""> -->
            <h4 class="title">{{item.title}}</h4>
            <div class="info clearfix">
                <p class="price">
                    <del>￥{{item.sell_price}}</del>
                    <span>￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span class="mui-pull-left">热卖中</span>
                    <span class="mui-pull-right">剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button v-show="flag" type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageindex:1,
            goodsList:[],
            flag: true
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result=>{
                // console.log(result);
                if(result.body.status==0){
                    this.goodsList=this.goodsList.concat(result.body.message);
                }
                if(result.body.message.length==0){
                    Toast("没有更多了!")
                    this.flag=false
                }
            })
        },
        getMore(){
            this.pageindex++,
            this.getGoodsList()
        },
        goDetails(id){
            this.$router.push({name:'goodsInfo',params:{id}});
        }
    }
}
</script>
<style lang="less">
.goods-list-container{
    padding: 7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    .goods-item{
        width: 49%;
        min-height: 293px;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 5px 0;
        padding: 2px;
        p{
            padding: 5px;
        }
        img{
            width: 100%;
            display: block;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            .price{
                font-size: 16px;
                del{
                    font-size: 14px;
                }
                span{
                    color: red;
                    font-weight: 700
                }
            }
        }
    }
}
</style>
