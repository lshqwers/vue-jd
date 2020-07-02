<template>
  <div class="app">
    <!-- 
      Error in render: "TypeError: Cannot read property 'matched' of undefined"
      found in
     -->
     <!-- 命名视图 -->
      <!-- <router-view name="aa"></router-view>
      <router-view name="bb"></router-view>  
      <router-view name="cc"></router-view>  
      <router-view></router-view>   -->
      <router-view></router-view>
      <div class="tabs">
        <!-- 
             这里的to是routes配置的path路径
             active-class是类名的高亮    
             tag属性,指定最终渲染成哪个HTML标签
        -->
        <!-- <router-link :to='{name:"about"}'  tag='span'  active-class='on'>About</router-link> -->
        <!-- <router-link to='/about'  tag='span'  active-class='on'>About</router-link>
        <router-link to='/home'   tag='span'  active-class='on'>home页</router-link>
        <router-link to='/my'     tag='span'  active-class='on'>我的</router-link>
        -->
        <!-- <router-link to='/abc'    tag='span'  active-class='on'>ABC</router-link> -->
        <span  @click="handlclick(1)" >About</span>
        <span  @click="handlclick(2)" >home页</span>
        <span  @click="handlclick(3)">我的</span>
        <span  @click="handlclick(4)">Find</span>
        <!-- <span  @click="handlclick(4)">Datal</span> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
    }
  },
  components: {},
  mounted(){
    // error  '$store' is not defined  no-undef,要用this.store
    // 通过this.$store 可以获取state中的数据
    console.log('vuex',this.$store.state.msg)
    console.log('22')
    console.log('vex',this.$store)
    /*
    
    */ 
/* 注意： 一定要区分 this.$route 和 this.$router 这两个对象，
this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，
实现路由的 前进、后退、 跳转到新的 URL 地址
*/
    // console.log('$route',this.$route);
    //  console.log('$router',this.$router);      
  },
 
  // 方法是定义在method中
  methods:{
    handlclick(indx){
      switch(indx){
        case 1:
        // 使用path进行跳转
        this.$router.push('/about')
        break;
        case 2:
        this.$router.push('/home')
        break;
        case 3:
        this.$router.push('/my')
        break;
        case 4:
        this.$router.push('/find')
        break
        default:
      }
    },
  }
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span.on {
  color: red;
}
.box {
  position: absolute;
  bottom: 120px;
  right: 0;
}
.box1 {
  position: absolute;
  top: 0;
  right: 0;
}
.router-link-active{
	color: red;
}
/* span{
  width: 40px;
  height: 40px;
}
.on{
  color: red
} */
/*
   $route
  {name: "home", meta: {…}, path: "/home", hash: "", query: {…}, …}
fullPath: "/home"
hash: ""
matched: Array(1)
0: {path: "/home", regex: /^\/home(?:\/(?=$))?$/i, components: {…}, instances: {…}, name: "home", …}
length: 1
__proto__: Array(0)
meta: {}
name: "home"
params:
__proto__: Object
path: "/home"
query: {}
__proto__: Object

  $router
  VueRouter {app: Vue, apps: Array(1), options: {…}, beforeHooks: Array(0), resolveHooks: Array(0), …}
afterHooks: []
app: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
apps: [Vue]
beforeHooks: []
fallback: false
history: HTML5History {router: VueRouter, base: "", current: {…}, pending: null, ready: true, …}
matcher: {match: ƒ, addRoutes: ƒ}
mode: "history"
options: {mode: "history", routes: Array(5)}
resolveHooks: []
currentRoute: (...)
__proto__: Object
*/
</style>
