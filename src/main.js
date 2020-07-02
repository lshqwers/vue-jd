// 这个个是路口文件
// 引入vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 关闭项目启动的生产提示
Vue.config.productionTip = false
// 引入router  To install it, you can run: npm install --save router一定要使用./这个路径
import Router from './router'
// import store from './store'
import store1 from './store/index1.js'
// 注册路由
// App.use(Router)
// new Vue的实例
new Vue({
  // 或者是router:router可以简写成router
  // 配置一个router的配置项 
  router:Router,
  // store:store,
  store:store1,
  // store,
  render: h => h(App),
}).$mount('#app') 
// 手动挂载 $mount
