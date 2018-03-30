<template>
  <div id="app" class="app">
    <router-view>
    
    </router-view>
  </div>
</template>

<script>
import store from './vuex/store'
// import {initStore} from './vuex/action'

export default {
  name: 'App',
  store,
  ready() {
    this.store.commit('initNote')
  }
}
</script>

<style>
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  height: 100%;
  max-height: 100%;
  position: relative;
}
.clearfix::after{
  clear: both;
}
</style>
