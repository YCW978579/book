<template>
    <div class="head">
        <div class="header">    
            <mt-header :title="list.title">
                <router-link to="/Rank" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">
                    <div class="rank">周榜</div>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <div @click="month(mm)" class="rank">月榜</div>
                </mt-tab-item>
                <mt-tab-item id="3">
                    <div @click="total(all)" class="rank">总榜</div>
                </mt-tab-item>
            </mt-navbar>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
               <DetailRank :books="books"></DetailRank>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <DetailRank :books="books"></DetailRank>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <DetailRank :books="books"></DetailRank>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import DetailRank from "@/components/RankList"
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    created(){
          var id = this.$route.params.id
             var url = this.HOME+`/ranking/${id}`;  
             this.$axios.get(url).then(res=>{ 
                 console.log(res)          
                this.mm= res.data.ranking.monthRank,
                this.all = res.data.ranking.totalRank,          
                this.books=res.data.ranking.books
                this.list = res.data.ranking
            }).catch(error=>{
                console.log(error);
            })
    },
    methods:{
         month(mm){
             var id = this.mm
             var url = this.HOME+`/ranking/${id}`;  
             this.$axios.get(url).then(res=>{                    
                this.books=res.data.ranking.books
            }).catch(error=>{
                console.log(error);
            })
         },
         total(all){
             var id = this.all
             var url = this.HOME+`/ranking/${id}`;  
             this.$axios.get(url).then(res=>{                    
                this.books=res.data.ranking.books
            }).catch(error=>{
                console.log(error);
            })
         },
    },
    data(){
        return{
            list:[],
            books:[],
            booksA:[],
            booksB:[],
            selected:'1',
            id:String,
            mm:String,
            all:String
        }
    },
    components:{
        DetailRank,
      Navbar,
      TabItem,
      Header  
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



