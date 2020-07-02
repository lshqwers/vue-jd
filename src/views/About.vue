<template class="shouye">
<div>
     <h1>About</h1>
     <span v-text="$store.state.msg"></span>
     <span>点击++</span>
</div>
</template>
<script>
export default {
    mounted(){
        console.log('vuex',this.$store)
    },
   
}
</script>
<style lang="scss" scoped>

</style>


