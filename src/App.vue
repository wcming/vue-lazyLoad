<template>
  <div ref="app" id="app" class="rootView">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
    }
  }
</script>

<style>
  html,body,div,h1{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
