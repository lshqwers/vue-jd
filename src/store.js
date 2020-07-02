// 引入vue
import Vue  from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 注册vuex 
Vue.use(Vuex)
// vuex是组件直接数据交互的最终的方法
const store=new Vuex.Store({
    // 计算属性
    // 只要state的数据变化,视图自动更新页面状态  state是共享的数据
    state:{
        msg:22,
        foo: 'foo'
    },
    // getters:相当于是组件中的计算属性
    // 在getter关联的state只要发生变化,getters会自动更新
    // getters是一个函数,但一定return表达式,我们把它当成变量使用
    getters:{
        msg2:function(state){
            return state.msg*100
        }
    },
    // 他是(同步)修改state的核心(主要入口)
    mutations:{
        updateMsg(state,playload){
            state.msg+=playload.count
        }
    },
    // actions异步行为 调接口是在actions 不是action
    actions:{
        /*
            在actions中也可以同步修改state,在deltool看不到修改的内容
            // 在actions里面的方法,都是异步的,比如调接口,定时器等
            // vuex官方特别建议,只用mutations来修改state,不要使用actions来修改state
             asyncUpdateMsg(store,playload){
                 store.state.msg+=playload.count
             }
        */
       asyncUpdateMsg(store,playload){
            setTimeout(()=>{
                // 在组件
                // this.$store.commit('updateMsg',playload)
                // commit是在actions中,提交mutations方法
                store.commit('updateMsg',playload)
            },2000)
        }
    }
})
export default store
// rgba和opcity   rem em px 的区别    es6的新特性   
