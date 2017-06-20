import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

new Vue({
  el: '#app',  //这里绑定的是index.html中的id为app的div元素
  router,
  render: h => h(App)
  // 这里的render: h => h(App)是es6的写法
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(h){
  //     return h(App);
  // });
})
