<template class="shouye">
  <div class="title">
    <h1>home页</h1>
    <h1 v-text="$store.getters.msg2"></h1>
    <span v-text="msg"></span>
    <h1 v-text="msg2"></h1>
    <!-- 渲染音乐列表 -->
    <div>
      <div v-for="item in songList" :key="item.id">
        <span v-text="item.name"></span>
      </div>
    </div>
    <!-- 一个内容中只有编程式导航或声明式导航,其中的一个 - -->
    <!-- <div v-for="item in arr" :key="item.id" v-cloak> -->
    <!-- 
              声明式导航
              动态添加参数
              :to="/detail/"+item.id这个是错误的,应该是:to='"/detail/"+item.id'
    -->
    <!-- <router-link :to='"/detail/"+item.id' tag="span">
        <span v-text="item.id"></span>
        <span>-</span>
        <span v-text="item.name"></span>
    </router-link>-->
    <!-- </div> -->
    <!-- 编程式导航（建议的写法） -->
    <div v-for="item in goods" :key="item.id" @click="skip(item.id)">
      <span v-text="item.id"></span>
      <span>-</span>
      <span v-text="item.name"></span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      arr: [
        { id: 1, name: "电脑", price: 2000 },
        { id: 2, name: "鼠标", price: 3000 },
        { id: 3, name: "键盘", price: 4000 },
        { id: 4, name: "耳机", price: 5000 }
      ]
    };
  },
  computed: {
    ...mapState("study", ["msg"]),
    ...mapGetters("study", ["msg2"]),
    ...mapState("song", ["songList"])
  },
  mounted() {
    let params = {
      ct: 24,
      qqmusic_ver: 1298,
      new_json: 1,
      remoteplace: "txt.yqq.song",
      searchid: 54616638128860322,
      t: 0,
      aggr: 1,
      cr: 1,
      catZhida: 1,
      lossless: 0,
      flag_qc: 0,
      p: 1,
      n: 10,
      // w: '%E5%91%A8%E6%9D%B0%E4%BC%A6',
      w: "周杰伦",
      g_tk_new_20200303: 5381,
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: "json",
      inCharset: "utf8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 0
    };
    this.getQQMusic(params);
  },
  methods: {
    // cli(id){
    //     this.$router.push('/detail/'+id)
    // }
    ...mapActions("song", ["getQQMusic"]),
    skip(id) {
      this.$router.push("/detail/" + id);
    }
  }
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  float: left;
}
.title div {
  width: 150px;
  display: block;
  margin-top: 100px;
}
[v-cloak] {
  display: none;
}
</style>


