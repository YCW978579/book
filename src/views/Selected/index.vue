<template>
    <div class="selected">
        <Header-B></Header-B>
         <div class="box">
            <div class="lei">男生</div>
            <div class="some" v-for="(item,index) in male" :key="index.key" @click="ano(item.name,b)">
                <p class="wore">{{item.name}}</p>
                <p class="num">{{item.bookCount}}</p>
            </div>
        </div>
        <div class="box">
            <div class="lei">女生</div>
            <div class="some" v-for="(item,index) in female" :key="index.key"  @click="ano(item.name,a)">
                <p class="wore">{{item.name}}</p>
                <p class="num">{{item.bookCount}}</p>
            </div>
        </div>
        <div class="box">
            <div class="lei">漫画</div>
            <div class="some" v-for="(item,index) in picture" :key="index.key"  @click="ano(item.name,c)">
                <p class="wore">{{item.name}}</p>
                <p class="num">{{item.bookCount}}</p>
            </div>
        </div>
        <div class="box">
            <div class="lei">出版</div>
            <div class="some" v-for="(item,index) in press" :key="index.key"  @click="ano(item.name,d)">
                <p class="wore">{{item.name}}</p>
                <p class="num">{{item.bookCount}}</p>
            </div>
        </div>
       <router-view></router-view>
    </div>
</template>
<script>
import HeaderB from  "@/components/bookheader/indexA.vue"
export default {
    methods:{
        ano(id,type){
            console.log(id)
            this.$router.push({path:`/Selected/${type}/${id}`})
        }
    },
    created(){
        //HOME变量为已挂载的可跨域域名，这里将其拼接完，成为一个完整路径。
        var url =this.HOME+'/cats/lv2/statistics';
        //this代表vue对象，之前在main.js中把axios挂载到了vue中，这里直接用this.$axios调用axios对象
        this.$axios.get(url).then(res=>{
            // console.log(res);
            this.male=res.data.male
            this.female=res.data.female
            this.picture=res.data.picture
            this.press=res.data.press
        }).catch(error=>{
            console.log(error);
        })
    },
    components:{
        HeaderB
    },
    data:function(){
        return{
            male:[],
            female:[],
            picture:[],
            press:[],
            a:"female",
            b:"male",
            c:"picture",
            d:"press"
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/assets/less/index.less";
.selected{
    .box{
        .lei{
            font-size: 0.9rem;
            color: #999999;
            height: 3rem;
            line-height: 3rem;
            margin-left: 1rem;
        }
        .some{
            width: 33.33%;
            text-align: center;
            padding:1.5rem 0;
            border-top: 1px solid #f8f8f8;
            border-right: 1px solid #f8f8f8;
            border-bottom: 1px solid #f8f8f8;
            display: inline-block;
            .wore{
                font-size:1rem ;
                color:#333333;
                font-weight: 700;
            }
            .num{
                    font-size: 1rem;
                    color:#D2D2D2D2;
            }
        }
    }
}

</style>
