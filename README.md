1.安装node.js的环境  node -v验证
2.安装脚手架 npm i -g @vue/cli  或 npm i @vue/cli   -g 
全局一次安装,一直都存在,任何都可以使用
3.使用脚手架创建项目
vue create  项目的名字
选 default
热更新
vue-cli 的vue config .js 配置文件 很重要
babel 编译器 用的ts 转换为浏览器认识的语言
eslint  代码的检测工具 (约束代码的风格)
 4. cd   自己创建的文件/  （按tab可以补全）  enter进入
 5.ls 
6.npm run serve     enter进入  compilde 编译
git bush 内置很多linux的命令
注意:项目的名字不要乱改
项目的文件
npm  test 
npm run start 或 npm  start 
"scripts":{
  "start":"npm run serve"
}
执行用npm start 
800多个包 
一个包依赖其他的包
dep
devde
安装第三依赖
cnpm  i 包名 -S 把包记录在dep中
npm i 包名 -D 把记录在devde
上传项目把node_model文件删除,
拉下来直接npm i  因为package.json中记录包名
项目执行不了,把node_model删除了,在npm i 下载node_model,下载包名
npm i zzz -g 永久可以用 
7.eslint 
作用:用于
git的首页是README.md的文件
代码笔记的注释在README.md
gitignore不上传那个文件到git中
localhost:8080本地服务器
public本地的服务器(静态资源服务器）
src是工作的文件(写代码的在这里)
npm 放了好的包
cnpm 淘宝镜像
下载cnpm
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

创建好项目以后,自己手动输入 localhost:8080
项目工程架构
业务开发:UI还原.组件设计.业务逻辑实现
项目上线
安装 vue-devtools vue的调试根据
8.
github.com/arcliang/Vue-Devtools-
git clone https://github.com/arcliang/Vue-Devtools-.git
克隆失败直接下载
9.devServer
本地服务是由wabpack提供的
main.js是入口文件
npm run build打包生成dist
时实编译,差入到public中的index文件
assets静态资源的文件
.vue就是代表一个组件  单文件组件
组件名大写 驼峰命令
vue的高亮插件
App.vue的子组件或间接组件 先引入,导入 component注册,在template中调用
1.单页面应用程序(SPA)  只有一个页面(index.html),组件的改变,通过路由
安装路由
2.vue-router让SPA开发非常简单
安装 cnpm i vue-router -S   
1.引入vue
copmpoents可以放复用的组件
用views
所有的组件都是但单一的节点
在路由中引入router.js配置名字和路径和引入组件,暴露,在main.js在实例中调用和引用
//路由的视图容器,它的作用vue在哪里显示
路由路径匹配的视图
router-link默认转为a标签
tag里面是要渲染的标签 router-link希望它渲染什么标签,默认是a标签
active-class='on' 自定义一个on的属性在css中
在APP.vue中<router-view/>内置组件
在根目录中安装
<!-- 用工厂函数,避免被复用 -->
data(){
    return{
        msg:'world'
    }
}






















