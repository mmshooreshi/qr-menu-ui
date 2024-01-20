<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PdfMenu msg="Hoormazd Menu :D" />
  </div>
</template>

<script>
import PdfMenu from './components/PdfMenu.vue'

export default {
  name: 'App',
  components: {
    PdfMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -10px;
}
</style>
