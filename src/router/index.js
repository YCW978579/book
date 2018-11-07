import Vue from 'vue'
import Router from 'vue-router'
import Classification from '@/views/Classification/index.vue'
// import Man from '@/components/sex/man.vue'
// import Woman from '@/components/sex/woman.vue'
import Rank from '@/views/Rank'
import DetailRank from '@/views/Rank/detail.vue'
import Selected from '@/views/Selected'
import DetailSelected from '@/views/Selected/detail.vue'
import ContentSelected from '@/views/Selected/content.vue'
import ContentRank from '@/views/Rank/content.vue'
import VIP from '@/views/VIP'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"Classification"
    },
    {
      path:"/Classification",
      component:Classification,
    },
    {
      path:"/VIP",
      component:VIP
    },
    {
      path:"/Selected",
      component:Selected,
      children:[
        {
          path:"/Selected/:type/:id",
          component:DetailSelected,
          children:[
            {
                path:"/book/:_id",
                component:ContentSelected
            }  
          ]
        },
      ]
    },
    {
      path:"/Rank",
      component:Rank,
      children:[
        {
          path:"/Rank/:id",
          component:DetailRank,
          children:[
            {
              path:"/book/:_id",
              component:ContentRank,
            }
          ]
        },
        
      ]
    },
  ]
})
