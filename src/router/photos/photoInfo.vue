<template>
    <div class="photo-info-container">
        这是图片详情----{{$route.params.id}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    created(){
        this.getImgImfo()
    },
    methods:{
        getImgImfo(){
            this.$http.get('')
        }
    }
}
</script>
<style lang="less">

</style>
