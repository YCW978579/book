<template>
    <div class="head">
        <div class="header">    
            <mt-header>
                <router-link to="/Selected" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div>
              <span>热门</span>
              <span>新书</span>
              <span>好评</span>
              <span>完结</span>
              <span>包月</span>
            </div>
            <div>
              <span>全部</span>
              <span>东方玄幻</span>
            </div>
        </div>
        <Detail-Rank :books="books"></Detail-Rank>
    </div>
</template>

<script>
import DetailRank from "@/components/RankList"
import { Header } from 'mint-ui';
export default {
  data(){
     return{
        books:[]
     }
  },
     components:{
        DetailRank,
        Header  
    },
    created(){
      var id =encodeURI(this.$route.params.id) 
      var url = this.HOME+`/book/by-categories?gender=${this.$route.params.type}&type=hot&major=${id}&minor=&start=0&limit=20`
      this.$axios.get(url).then(res=>{
        this.books=res.data.books
        console.log(res)
      })
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.rank{
    font-size: 1rem;
}
.head{
  position: fixed;
  top:0;
  background: white;
  width: 100%;
  height: 100%;
  overflow-y:scroll;
  overflow-x:hidden;
  .header{
    position: fixed;
    width:100%;
    top:0;
    z-index:99;
  }
.nav{
    font-size: 1rem;
    color:#999;
      
  }
}
.mint-tab-item-label{
    font-size: 2rem;
}
.mint-header{
    background-color:#b93321;
    
}
.mint-header-title{
    font-weight: bold;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom:2px solid #b93321;
    color:#999;
}

</style>
