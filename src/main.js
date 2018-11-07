// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import './assets/icon/iconfont.css'
import 'swiper/dist/css/swiper.css'
import Mint from 'mint-ui'

Vue.use(Mint);
import 'mint-ui/lib/style.css'

// 把axios挂载到vue原型中，在vue每个组件中都可以使用axios发送请求
Vue.prototype.$axios=Axios;
// 在这里要注意Vue.prototype.HOME是一个定值，默认指向localhost
// 此处修改路径，让其指向"/api",配置文件index.js定义的可跨域路径
Vue.prototype.HOME='/api'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
