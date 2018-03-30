<template>
  <div class="buy-car">
    <ul>
      <li v-for="(d,v) in proList" :key="v" class="clearfix">
        <div class="fl left" @click="goDetail(d.proId)">
          <p><span>商品id:</span>{{d.proId}}</p>
          <p><span>商品名称：</span>{{d.proName}}</p>
          <p><span>商品数量：</span>{{d.proNum}}</p>
        </div>
        <div class="clearfix fr right">
          <div class="btn btn-reduce fl" @click="reduce(d.proId)">-</div>
          <div class="fl add-num">{{d.car}}</div>
          <div class="btn btn-plus fl" @click="add(d.proId)">+</div>
        </div>
      </li>
    </ul>
    <div class="show-all-car"><span  style="color:#000;">购物车总数：</span><span style="color:#000;">{{$store.state.buyCar}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      proList: []
    }
  },
  mounted() {
      this.proList = this.$store.state.proList
  },
  methods: {
    add(v) {
      this.$store.commit('addProInfo',v)
    },
    reduce(v){
      this.$store.commit('deleteProInfo',v)
    },
    goDetail(v) {
      this.$store.commit('getProInfoById',v)
      this.$router.push({path: '/ProDetail'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn{
  width: 30px;
  height: 30px;
  border:1px solid #ccc;
  border-radius: 50%;
  font-size: 20px;
  line-height: 30px;
  font-size: 22px;
  padding: 0;
}
.add-num{
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.buy-car{
  padding: 20px;
}
.buy-car li{
   border-bottom: 1px solid #f5f5f5;
  
}
.right{  
   display: flex;  
   align-content:center;
}
.show-all-car{
  width: 100%;
  height: 40px;
  background: #777;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  opacity: 0.6;
  text-align: center;
  color: #000;
}
</style>
