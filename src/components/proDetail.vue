<template>
  <div class="hello clearfix">
    <div class="fl">
      <p><span>商品id:</span>{{$store.state.detail.proId}}</p>
      <p><span>商品名称：</span>{{$store.state.detail.proName}}</p>
      <p><span>商品数量：</span>{{$store.state.detail.proNum}}</p>
    </div>
    <div class="clearfix fr right">
      <div class="btn btn-reduce fl" @click="reduce1($store.state.detail.proId)">-</div>
      <div class="fl add-num">{{$store.state.detail.car}}</div>
      <div class="btn btn-plus fl" @click="add1($store.state.detail.proId)">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: ''
    }
  },
  mounted: {
    
  },
  methods: {
    add1(v) {
      this.$store.commit('addProInfo',v)
     },
    reduce1(v){
      this.$store.commit('deleteProInfo',v)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
