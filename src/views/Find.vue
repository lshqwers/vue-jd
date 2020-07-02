<template class="shouye">
<div>
    <!--$store.state.msg2 不是用  而是 $store.getters.msg2  -->
     <h1 @click="handclick">Find</h1><h1 v-text="$store.getters.msg2">iwiir</h1>
     <h1 v-text="msg"></h1> <h1 v-text="msg2"></h1>
     <!-- 二级路由 -->
     <!-- 大多情况下，exact-active-class 和 active-class 用哪个都可以 /find/good用active-class -->
     <div class="shop">
         <!-- 它没有跳转页面,所以用编程式导航,它也用到了高亮 to与二级path完全相等-->
        <router-link to="/find/good"  tag="span" exact-active-class="on">发现好货</router-link>
        <router-link to="/find/price" tag="span" exact-active-class='on'>发现优惠</router-link>
     </div>
     <!-- 二级路由视图 -->
     <router-view></router-view>
</div>
</template>
<script>
// mapState的作用是把Vuex中的state数据映射进行,在计算属性...mapState([])然通过this.进行访问
// mapGetters的作用是把vuex中的getters的数据映射进来,在计算属性进行映射，然后通过this.进行访问
// mapActions用于映射Vuex中的actions方法，在methods选项中进行映射，然后this.进行访问
// mapMutations用于映射Vuex中的mutations方法，在methods选项中进行映射，然后this.进行访问
// 映射可以使用this 把全局的映射成为私有的变量 
import { mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
      name: 'Find', //Find是组件的名字,方便在devtools中查看
      // computed就是 在计算属性...mapstate([])  mapstate类于计算属性,它可以直接使用
      computed:{
      //  mapActions,mapGetters相当于变量,在计算属性中定义 
        //   ...mapState(['msg','foo']),
        // 下面的是模块的子模块的名字
         ...mapState(['msg','foo']),
      //  映射msg2,这个是在getters中定义的变量
          ...mapGetters(['msg2']) 
      },
      mounted(){
         console.log('33')
         console.log('store',this.$store.getters.msg2)
         console.log('map',this.msg,this.foo)
     },
    //  mapMutations它是方法,它类似于方法
      methods:{
            // ...mapMutations(['方法名']),
            /* mapState通过扩展运算符将store.state.msg 映射this.msg 
               这个this 很重要，这个映射直接映射到当前Vue的this对象上。
            */
             ...mapMutations(['updateMsg']),
             ...mapActions(['asyncUpdateMsg']),
        handclick(){
            console.log('333');
            console.log(this.$store)
            // 不建议修改直接修改vuex中的状态组数
            // 第一种方法
            // this.$store.state.msg++
            // updateMsg这个方法是在mutations定义的方法
            // 向store提交一个名叫updateMsg的mutations方法,去申请改变msg
            // 热更新不会重置状态管理的数据
            // playload是组件带过来的数据
            var playload={
                count:10,
                type:'自动加了'
            }
            // 第二种方法
            // this.$store.commit('updateMsg',playload)
            // 向store派发一个名叫asyncUpdateMsg的actions方法,申请异步修改msg
            // 第三种方法
            // this.$store.dispatch('asyncUpdateMsg',playload)
            // 第四种方法  这个方法是通过updateMsg,映射过来 同步的方法
            //    this.updateMsg(playload)  
            // 直接通过asyncUpdateMsg来访问
            this.asyncUpdateMsg(playload)
        }
    }  
}
</script>
<style scoped>
.shop{
    display: flex
}
.shop>span{
    flex: 1;
    border:1px solid #cccccc;
    cursor: pointer;
    height: 50px;
    text-align: center;
    line-height: 50px
}
.shop>span.on{
    color: red
}
h1{
    cursor: pointer;
}
</style>


