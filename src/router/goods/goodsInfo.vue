<template>
    <div class="goods-info-container">
        <!-- 小球 -->
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-if="ballflag" ref="ball"></div>
        </transition>
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
                        <numbox :maxNum="goodsInfo.stock_quantity" @getcount="getSelectedCount"></numbox>
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
            ballflag:false,
            selectedCount: 1 //选择参数的个数
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
            this.ballflag = !this.ballflag;
           var goodsinfo = {
               id:this.id,
               count:this.selectedCount,
               selected: false //是否选中
           }
            // 调用 store 中的 mutations 来将商品加入购物车
           this.$store.commit("addToCar", goodsinfo);
           
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el , done){
            el.offsetHeight;
            // 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
            //小球
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //徽标
            const badgePosition = document.getElementById('badge').getBoundingClientRect()

            const x = badgePosition.left - ballPosition.left
            const y = badgePosition.top - ballPosition.top

            el.style.transform = `translate(${x}px,${y}px)`;
            // cubic-bezier速度曲线
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el){
            this.ballflag = !this.ballflag;
        },
        getSelectedCount(count){
            //子组件传过来的参数
            this.selectedCount = count;
            // console.log(this.selectedCount);
        },
        goDesc(){
            //图文介绍
            // 点击使用编程式导航跳转
            this.$router.push({name:'goodsDesc',params: this.id})
        },
        goComment(){
            //商品评论
            this.$router.push({name:'goodsComment',params: this.id})
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
    background-color: #eee;
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
    .ball{
        position: absolute;
        left: 140px;
        top: 390px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        z-index: 99;
    }

}
</style>
