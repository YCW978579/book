<template>
    <div class="rank">
        <Header-B></Header-B>
        <div class="box">
            <div class="lei">男生</div>
            <ul class="some" v-for="(item,index) in male" :key="index.key">
                <li v-if="item.collapse==false" class="thing" @click="rank(item._id)">
                    <img :src="imgurl(item.cover)">
                    {{item.title}}
                </li>
            </ul>
            <div class="thingA" @click="showCont" :class="{'class-a':isA,'class-b':!isA}">别人家的排行榜</div>
            <ul class="some" v-for="(item,index) in male" :key="index.key" v-if="show">
                <li v-if = "item.collapse==true" class="thing" @click="rank(item._id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="box">
            <div class="lei">女生</div>
            <ul class="some" v-for="(item,index) in female" :key="index.key">
                <li v-if="item.collapse==false" class="thing" @click="rank(item._id)">
                    <img :src="imgurl(item.cover)">
                    {{item.title}}
                </li>
            </ul>
            <div class="thingA" @click="showContV" :class="{'class-a':isV,'class-b':!isV}">
                别人家的排行榜
                </div>
            <ul class="some" v-for="(item,index) in female" :key="index.key" v-if="showV">
                <li v-if = "item.collapse==true" class="thing" @click="rank(item._id)">{{item.title}}</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import HeaderB from  "@/components/bookheader/indexA.vue"
export default {
    created(){
        //HOME变量为已挂载的可跨域域名，这里将其拼接完，成为一个完整路径。
        var url =this.HOME+'/ranking/gender';
        //this代表vue对象，之前在main.js中把axios挂载到了vue中，这里直接用this.$axios调用axios对象
        this.$axios.get(url).then(res=>{
            console.log(res);
            this.male=res.data.male
            this.female=res.data.female
        }).catch(error=>{
            console.log(error);
        })
    },
    components:{
        HeaderB
    },
    methods:{
        imgurl(url){
            return `http://statics.zhuishushenqi.com/${url}`
        },
        showCont:function(){
        this.show = !this.show;
        this.isA=!this.isA;
        },
        showContV:function(){
        this.showV = !this.showV;
        this.isV=!this.isV;
        },
        rank(id){
            this.$router.push({path:`/Rank/${id}`})

        }
    },
    data(){
        return{
             show:false,
             showV:false,
             isA:false,
             isV:false,
             male:[],
             female:[],
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/assets/less/index.less";
.class-a{
    color: red;
}
.class-b{
    color: black;
}
.rank{
    .box{
        .lei{
            color: #999999;
            font-size: 0.8rem;
            height: 3rem;
            line-height: 3rem;
            background:#E6E6E6;
            padding-left: 1rem;
        }
        .some{
            .thing{
                display: block;
                height: 4rem;
                line-height: 4rem;
                margin-left:4rem;
                border-bottom: 1px solid #EEEEEE;
                img{
                    width: 2rem;
                    height: 2rem;
                    vertical-align: middle;
                }
            }
            
        }
        .thingA{
                    height: 3rem;
                    line-height: 3rem;
                    margin-left:4rem;
                }
    }
}

</style>
