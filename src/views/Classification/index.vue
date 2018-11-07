<template>
    <div class="Classification">
        <HeaderA></HeaderA>
         <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import HeaderA from  "@/components/bookheader/index.vue"
export default {
    components:{
        HeaderA,
    },
    mounted(){
     new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    })        
  }
}
</script>
<style scoped lang="less">
@import "~@/assets/less/index.less";
.swiper-container {
        width:100%;
        // height:10rem;
        // background:red;
        // margin: 20px auto;
    }
</style>
