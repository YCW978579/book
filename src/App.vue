<template>
  <div id="app">
       <!--路由页面-->
       <router-view></router-view>
  </div>
</template>

<script>
import BookHeader from "@/components/bookheader"
export default {
  components:{
    BookHeader,
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/less/index.less";
</style>
