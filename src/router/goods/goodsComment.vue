<template>
    <div class="goods-comment-container">
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
import comment from "../../components/comment.vue"
export default {
    components:{
        comment
    }
}
</script>
<style lang="less">
    .goods-comment-container{
        padding: 4px;
    }
</style>
