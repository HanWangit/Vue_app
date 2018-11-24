<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract">-</button>
        <input class="mui-input-numbox" type="number" v-model="num" />
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:1
        }
    },
    methods:{
        add(){
            //加
            if(this.num >= this.maxNum){
                this.num = this.maxNum;
            }else{
                this.num++
            }
        },
        subtract(){
            //减
            if(this.num <= 1){
                this.num = 1
            }else{
                this.num--
            }
        }
    },
    props:["maxNum"]
}
</script>
<style lang="less">

</style>
