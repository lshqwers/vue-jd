// 引入vue
import Vue from 'vue' 
// 引入vuex
import Vuex from 'vuex'
// 注册vuex
Vue.use(Vuex)
// 这个是store的子模块
import study from './modules/study'
import song from './modules/song'
const store =new Vuex.Store({
    modules:{
        study,
        song
    }
})
// 暴露store
export default store
// 在main.js中去挂载 