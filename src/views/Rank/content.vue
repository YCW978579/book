<template>
   <div class="aaa">
         <mt-header>
                <router-link to="/Rank/:id" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    <Books-Detail :data="data"></Books-Detail>
   </div>
</template>

<script>
import { Header } from 'mint-ui';
import BooksDetail from "@/components/BooksDetail"
export default {
    created(){
          var id = this.$route.params._id
          console.log(id)
             var url = this.HOME+`/book/${id}`;  
             this.$axios.get(url).then(res=>{ 
                 console.log(res)  
                 this.data=res.data  
            }).catch(error=>{
                console.log(error);
            })
    },
    data(){
        return{
           data:{}
        }
    },
    components:{
        BooksDetail,
        Header
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.aaa{
  position: fixed;
  background: white;
  left:0;
  bottom: 0;
  left:0;
  right: 0;   
  top: 0;
  z-index: 100;
 .mint-header{
    background-color:#b93321;
    
}
}
</style>