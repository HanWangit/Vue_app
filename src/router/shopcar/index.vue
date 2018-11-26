<template>
    <div class="shopcar-container">
        <div class="mui-card" v-for="(item) in shopcarInfo" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="value"></mt-switch>
                    <img src="http://img2.imgtn.bdimg.com/it/u=1404021855,74940569&fm=11&gp=0.jpg" alt="">
                    <div class="shopcar-info">
                        <h3>{{item.title}}</h3>
                        <div class="shopcar-add">
                            <span class="price">￥{{item.sell_price}}</span>
                            <div class="mui-numbox" data-numbox-min="1">
                                <button class="mui-btn mui-btn-numbox-minus" :disabled="num <= 1" type="button" @click="num--">-</button>
                                <input class="mui-input-numbox" type="number" v-model="num" />
                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="num++">+</button>
                            </div>
                            <a href="javascript:;" class="del">删除</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner total">
                    <div>
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span>8</span>件,总价<span>￥88</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default{
    data(){
        return{
            num:1,
            value: true,
            maxNum: 10,
            shopcarInfo:[]
        }
    },
    created(){
        this.getShopCarInfo();
    },
    methods:{
        
        getShopCarInfo(){
            var GoodsId = [];
            this.car.forEach(item => {
                GoodsId.push(item.id)
            });

            this.$http.get('api/goods/getshopcarlist/'+GoodsId.join(',')).then(result=>{
                console.log(result);
                if(result.body.status==0){
                    this.shopcarInfo = result.body.message;
                }
            })
        }
    },
    computed: {...mapState(['car'])}
}
</script>
<style lang="less">
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .mui-card{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
            display: block;
            margin: 0 5px;
        }
        .shopcar-info{
            h3{
                font-size: 14px;
            }
            .shopcar-add{
                .price{
                    font-size: 16px;
                    color: red;
                }
                .mui-numbox{
                    height: 25px;
                    width: 110px;
                }
            }
        }
        .total{
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size: 16px;
                color: red;
            }
        }
    }
}
</style>