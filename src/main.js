import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import toast from 'components/common/toast/index.js';
import FastClick from "fastclick";
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
