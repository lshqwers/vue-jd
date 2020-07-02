// 每一个子module实际,就是一个普通json对象,包括state,getters,mutations,actions
const studModules={
    // 开启子模块的命名空间
    // 这个namespaced
    // modules这个选项用于把子模块module进行合并(带命名空间)
    // vuex.esm.js?ae8c:1075 
    // [vuex] module namespace not found in mapState(): study/ 没有使用这个namespaced命名空间
    namespaced:true,
    state:{
        msg:22,
        foo: 'foo'
    },
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
       asyncUpdateMsg(store,playload){
            setTimeout(()=>{
                // 在组件
                // this.$store.commit('updateMsg',playload)
                // commit是在actions中,提交mutations方法
                store.commit('updateMsg',playload)
            },2000)
        }
    }
}
// 暴露
export default studModules
// 1.这个是个分的modules,在index1中要去引入这个study.js的文件
// 2.子模块要加namespaced:true命名空间(开启子模块的命名空间),否则报错