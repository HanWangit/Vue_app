<template>
    <div class="mui-numbox" data-numbox-min="1">
        <button class="mui-btn mui-btn-numbox-minus" :disabled="this.num <= 1" type="button" @click="num--">-</button>
        <input class="mui-input-numbox" type="number" v-model="num" />
        <button class="mui-btn mui-btn-numbox-plus" :disabled="this.num >= maxNum" type="button" @click="num++">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:1,
            flag:false
        }
    },
    methods:{
        
    },
    watch:{
        num:function(newVal, oldVal){
            // console.log(newVal);
            this.$emit("getcount", newVal);
        }
    },

    props:["maxNum"]
}
</script>
<style lang="less">

</style>
