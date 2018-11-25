<template>
    <div class="goods-desc-container">
        <h3>{{goodsDesc.title}}</h3>
        <hr>
        <div class="content" v-html="goodsDesc.content">
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodsDesc:{}
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            this.$http.get("api/goods/getdesc/" + this.$route.params.id).then(result=>{
                if(result.body.status==0){
                    this.goodsDesc = result.body.message[0];
                }
            })
        }
    }
}
</script>
<style lang="less">
.goods-desc-container{
    padding: 4px;
    h3{
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 20px 0;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
