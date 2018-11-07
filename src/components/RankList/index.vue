<template>
        <div class="x">
            <div class="de" v-for="item in books" :key="item.key" @click="boo(item._id)">
                <span class="qq"><img :src="url(item.cover)"></span>
                <div class="det">
                    <h5>{{item.title}}</h5>
                    <p>{{item.author}}</p>
                    <p>{{item.shortIntro}}</p>
                    <div><span class="a">21.0万</span><span class="s b">人气</span><span class="j a">{{item.retentionRatio}}%</span><span class="b">读者留存</span></div>
                </div>
            </div>
        <router-view></router-view>
      </div>
</template>

<script>
import BooksDetail from "@/components/BooksDetail"
export default {
    components:{
        BooksDetail
    },
    props:{
        books:{
            type:Array,
            default:[]
        }

    },
    methods:{
        url(A){
           return `http://statics.zhuishushenqi.com${A}`
        },
        boo(_id){
            this.$router.push({path:`/book/${_id}`})
        }
    },
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.x{
    margin-top:22%;
    
    .de{
    width:100%;
    display:flex;
    padding:1rem;
    background: #f5f2ed;
    img{
        width:6.6rem;
        height:6rem;
    }
    .qq{
        width:6.6rem;
        height:6rem;
        display: inline-block;
    }
    .det{
        padding-left:1.2rem;
        line-height: 1.5rem;
        h5{
            font-size:1.2rem;
            color:#333;
        }
        p{
            font-size: 0.7rem;
            color:#999;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            width:50%;
        }
        div{
            display:flex;
            .s{
                border-right:1px solid black;
                padding-right:5px;
            }
            .j{
                padding-left:5px;
            }
            .a{
                color:#b93321;
                font-size: 1rem;
                display:inline-block;
            }
            .b{
                color:#999;
                font-size: 1rem;
                display:inline-block;
            }
        }
        
        
    }
}
}

</style>



