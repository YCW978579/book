<template>
    <div class="book-header">
        <div class="head">
            <div class="sex">
               <router-link to="/Man" class="man">男</router-link>
               <router-link to="/Woman" class="woman">女</router-link>
            </div>
            <div class="text">追书神器</div>
            <div class="search"><i class="iconfont icon-fangdajing"></i></div>
        </div>
        <tabs></tabs>
    </div>
    
</template>

<script>
import tabs from "@/components/tabs"
export default {
  components:{
    tabs
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.book-header{
    width:100%;
    // padding:0.5rem 0;   
    .head{
        height:2.7rem;
        width:100%;
        position:relative;  
        .sex{
            position:absolute;
            overflow: hidden;
            top:25%;
            left:3%;
            width:2.7rem;
            height:1.5rem;
            background:#f5f5f5;
            border-radius: 1.333rem;
            .man{
                display:block;
                width:50%;
                height:100%;
                font-size: 0.9rem;
                text-align: center;
                color:#9a9a9a;
                float:left;
                border-radius: 1.333rem;
                line-height:1.5rem;
                background: #F5F5F5;
                &.router-link-active{
                    background:#b93321;
                    color:white;
                }
            }
            .woman{
                display:block;
                width:50%;
                height:100%;
                font-size: 0.9rem;
                text-align: center;
                color:#9a9a9a;
                float:left;
                border-radius: 1.333rem;
                line-height:1.5rem;
                background: #F5F5F5;
                &.router-link-active{
                    background:#b93321;
                    color:white;
                }
            }
        }
        .text{
            position:absolute;
            top:10%;
            left:34%;
            font-size: 1.5rem;
            color:#b93321;
            font-weight: bold;
        }
        .search{
            position: absolute;
            top:15%;
            right:5%;
            i{
                font-size: 30px;
                color:#b93321;
                font-weight: 200px;
            }
        }
    }
    
}
</style>
