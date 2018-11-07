<template>
    <div class="tabs">
        <router-link to="/Classification" class="a">
            <span>精选</span>
        </router-link>
        <router-link to="/VIP" class="a">
            <span>VIP</span>
        </router-link>
        <router-link to="/Selected" class="a">
            <span>分类</span>
        </router-link>
        <router-link to="Rank" class="a">
            <span>排行</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
@import "~@/assets/less/index.less";
.tabs{
    width: 100%;
    background:#B93321;
    height: 2.2rem;
    line-height: 2.2rem;
    .a{
        display: inline-block;
        width: 24%;
        text-align: center;
        color: #DDADA9;
        font-size: 1rem;
        &.router-link-active{
            color: white;
        }
    }
}
</style>
