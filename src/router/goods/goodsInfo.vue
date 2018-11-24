<template>
    <div class="goods-info-container">

        <!-- 轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :swiperList="swiperList"></swiper>
                </div>
            </div>
        </div>
        <!-- 购买 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <span>市场价: <del>￥{{goodsInfo.sell_price}}</del> </span>
                        <span>销售价: <b class="market">￥{{goodsInfo.market_price}}</b></span>
                    </p>
                    <p>
                        <span>购买数量:</span>
                        <numbox :maxNum="goodsInfo.stock_quantity"></numbox>
                    </p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsInfo.goods_no}} </p>
                    <p>库存情况:{{goodsInfo.stock_quantity}} </p>
                    <p>上架时间:{{goodsInfo.add_time | dateFormat}} </p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from "../../components/swiper.vue"
import numbox from "../../components/goodsinfo_num.vue"
export default {
    data(){
        return {
            id: this.$route.params.id,
            swiperList:[],
            goodsInfo:{},
        }
    },
    created(){
        this.getswiperList();
        this.getGoodsInfo();
        
    },
    methods:{
        getswiperList(){
            this.$http.get("api/getthumimages/" + this.id).then(result=>{
                if(result.body.status==0){
                    this.swiperList = result.body.message;
                }
            })
        },
        getGoodsInfo(){
            this.$http.get("api/goods/getinfo/" + this.id).then(result=>{
                if(result.body.status==0){
                    this.goodsInfo = result.body.message[0];
                }
            })
        },
        addToShopCar(){
            //加入购物车
        },
        goDesc(){
            //图文介绍
        },
        goComment(){
            //商品评论
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="less">
.goods-info-container{
    .market{
        color: red;
        font-size: 18px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;    
        }
    }
}
</style>
