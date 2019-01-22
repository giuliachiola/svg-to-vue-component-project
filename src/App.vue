<template>
  <div id="app">
    Vue App
    ****
    <IconConfetti />
    ****
  </div>
</template>

<script>
import IconConfetti from './components/icons/IconConfetti.vue'

export default {
  name: 'app',
  components: {
    IconConfetti
  }
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
