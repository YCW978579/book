<template>
    <div class="ycw">
        <div class="con">
            <img :src="url(data.cover)">
            <div class="and">
                <p class="title">{{data.title}}</p>
                <p class="dat">
                    <span>{{data.author}}</span>
                    <span>{{data.cat}}</span>
                    <span>{{data.wordCount}}</span>
                </p>
                <p class="hou">小时前更新</p>
            </div>
            <div class="fix"></div>
        </div>
        <div class="sb">
            <p>
                <span>追人气</span>
                <span>{{data.latelyFollower}}万</span>
            </p>
            <p>
                <span>读者留存率</span>
                <span>{{data.retentionRatio}}%</span>
            </p>
            <p>
                <span>日更新字数/天</span>
                <span>{{data.serializeWordCount}}</span>
            </p>
        </div>
        <div class="read-link">
            <span class="button">加入书架</span>
            <span class="Abutton" @click="book(_id)">开始阅读</span>
        </div>
        <div>
            <p class="woe">{{data.longIntro}}</p>
        </div>
        <!-- <Book></Book> -->
    </div>
</template>

<script>
// import Book from "@/components/Book"
export default {
    // created(){
    //     var id = this.$route.params.Book
    //          var url = this.HOME+`/ranking/${id}`;  
    //          this.$axios.get(url).then(res=>{ 
    //              console.log(res)          
    //             this.mm= res.data.ranking.monthRank,
    //         }).catch(error=>{
    //             console.log(error);
    //         })
    // },
     methods:{
        url(A){
           return `http://statics.zhuishushenqi.com${A}`
        },
        book(bookid){
          this.$router.push({path:`/atoc?view=summary&book=${bookid}`})
        }
    },
    props:{
        data:{
            type:Object,
            default:{}
        }

    },
    components:{
        // Book
    },
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.fix{
    clear: both;
}
.ycw{
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
   .con{
       padding: 1.53333rem;
       img{
           float: left;
            width: 5.73333rem;
            height: 7.33333rem;
            margin-right: 1.3rem;
       }
       .and{
           float: left;
           .title{
               height: 1.66667rem;
                font-weight: 400;
                font-size: 17px;
           }
           .dat{
               height: 2.66667rem;
               line-height:  2.66667rem;
               font-size: 14px;
               
           }
           .hou{
               height: 1.53333rem;
                font-size: 14px;
           }
       }
   }
   .sb{
           padding: 1.53333rem 0;
            border-bottom: 1px solid #ebebeb;
            font-size: 12px;
            background: #fff;
            p{
                display: inline-block;
                vertical-align: middle;
                width: 31%;
                text-align: center;
            }
   }
   .read-link{
        padding: 1.53333rem 1.53333rem;
        border-bottom: 1px solid #ebebeb;
        font-size: 0;
        background: #fff;
        .button{ 
            display: inline-block;
            
            height: 3.17333rem;
            line-height: 3.17333rem;
            border: 1px solid #b93321;
            border-radius: 2px;
            text-align: center;
            font-size: 16px;
            width: 45%;
            margin-right: 5%;
        }
        .Abutton{ 
            display: inline-block;
           
            height: 3.17333rem;
            line-height: 3.17333rem;
            border: 1px solid #b93321;
            border-radius: 2px;
            text-align: center;
            font-size: 16px;
            width: 45%;
            margin-left: 5%;
            background:  #b93321;
            color: white;
        }
   }
   .woe{
       padding: 1.3rem;
       line-height: 1.66667rem;
        font-size: 13px;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
   }
}
</style>
