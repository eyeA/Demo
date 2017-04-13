<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h1>{{message}}</h1>
    <xd></xd>
  </div>
</template>

<script>
import xd from './components/xd1'
export default {
  name: 'app',
  data () {
    return {
      message: 'xud App '
    }
  },
  components: { xd }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
