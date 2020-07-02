<template>
    <div class="Detail">
       <h1>商品详情页</h1>
    </div>
</template>
<script>
export default{
    // props: ['id'],
    props:{
        id:{
            type: String,
            required: false,
            // default:'1'
        }
    },
    data(){
        return{
            // info:{}
        }
    },
    mounted(){
        // 动态路由
        // $route当前url的信息 有params的参数  path query 
        console.log('动态路由',this.$route.params.id)
        console.log('路由传参',this.id)
        // 动态路由,可以组件的复用
        // let id=this.$route.params.id
        // 调接口,获取商品的详情,赋值给声明式变量
        // http(id)
        // this.info='返回的结果'
    }
}
/*
    在App.vue中使用声明式导航或编程式导航
    vuex props
    prop传值 eventbus
*/
</script>
<style scoped>

</style>


