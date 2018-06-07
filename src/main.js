// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

//引用element-ui 公用消息提示组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引用懒加载插件
import VueLazyload from 'vue-lazyload'
//定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/404nofind.jpg'),//（图片路径错误时加载图片）
  loading: require('./assets/logo.png'),//(预加载图片)
  attempt: 1//（尝试加载图片数量）
})
/* eslint-disable no-new */
//添加引用公用的方法库
import format from './utils/utils';
//将公用方法定义在vue原型
Vue.prototype.format = format;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
