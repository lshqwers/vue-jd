// 引入vue
// 引入vue-router
// from单词 不要写错了
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由 (不要忘记了)
Vue.use(VueRouter)
// 引入组件 (不要忘记了) ./views/Home 不要忘记了是.vue
// 建议使用路由赖加载的写法,可以节省项目的性能  import('/views/Home.vue')
// 这种写法是错误的,一定要import('./views/Home.vue')  
const Home=()=>import('./views/Home.vue');
const About=()=>import('./views/About.vue')
const My=()=>import('./views/My.vue');
const Detail=()=>import('./views/Detail.vue')
// import Home   from  './views/Home.vue'
// import About  from  './views/About.vue'
// import My     from  './views/My.vue'
// import Detail from  './views/Detail.vue'
// 引入绝对路径
import Find   from  '@/views/Find.vue'
import Good   from  '@/views/Good.vue'
import Price  from  '@/views/Price.vue'
// @别名,它代表的是当前代码所在绝对路径+/src
// import A from '@/Abc/A.vue'
// import B from '@/Abc/B.vue'
// import C from '@/Abc/C.vue'
// routes不是, 而是router
// 路由的配置 path是路径 component组件的名字
// 要创建实例路由 就是hash模式
let router = new VueRouter({
  // 有#的路径,就是Hash路由;没有#的就是history路由
  // Hash模式的唯一的缺点,带个#,比较难看
  // history的优点是url比较正常,它的缺点是部署后刷新视图
  // 会包404(解决办法,要求后端重定向处理)
  mode: 'history',
  routes: [ 
    // 命名视图,组件名不是默认的default  组件名不能使用字符串
    { path: '/about', component: About},
    { path: '/home',  component: Home},
    { path: '/my',    component: My}, 
    // 动态的参数 动态路由 '/detail'和'/detail:id'这种获取不到传过来的id 
    // 第一种方法 动态路由,冒号后面的id是一个变量,最终可以this.$route.params中获取
    // { path: '/detail/:id',component: Detail},
    // 第二种方法 路由props来实现路由传参    也可以实现传参 props是路由传参,开启路由参,接受参数的组件
    // 两种方法选一种
    { path: '/detail/:id',component: Detail,props:true}, 
    // 路由的嵌套  二级路由
    { path:'/find',
      component: Find,    
      children:[
        // good不用加/ 它会自动匹配/good
        {path: 'good',  component: Good},  // 最终的路径: find/good
        // {path: 'good',  component: Good,children:[{}]},  
        {path: 'price', component: Price },
        // 二级路由的重定向   redirect 后面是路径  path 路径不要错
        {path: '',redirect: '/find/good'}
      ]
    },
    // 命名视图:给router-view命名
    // 当服务'/abc'路径时,用三个命名视图来分别显示三个组件
    // {
    //   path:'/abc',
    //   components:{
    //     aa: A,
    //     bb: B,
    //     cc: C
    //   }
    // },
    // { path: '/about', component: About },
    // { path: '/my', component: My }
    {path:'/',redirect:'/about'},
    // 通配符*表示匹配任何路径,一定要放在routes的数组后面
    // 通过匹配范围更大的路由关系,完后放
    {path:'/home*',component:Home},
    {path:'/find*',component:Find},
    // {path:'*',component: My},
    {path:'*',redirect:'/my'}
  ]
})

// 暴露路由
export default router

/*
   {
      path:'/',
      // 重定向,后面是 path中的路径 
      redirect: '/my'
    },
    // 别名 alias
    {
      path: '/home',
      alias:'/a',
      // components: {
      //   aa: Home
      // }
      component:Home,
      name:'home'
    }, 
    // { path:'/',redirect:{name:'about'} },
    {
      path: '/about',
      alias:'/c',
      components: {
        aa: About
      }
    },
    {
      path: '/my',
      components: {
        aa: My
      }
    },
*/