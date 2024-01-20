<template>
  <div id="app">
    <header>
      <!-- Navigation links -->
      <nav>
        <!-- <router-link to="/">Home</router-link> -->
        <!-- <router-link to="/page/hoormazd">hoormazd</router-link> -->

        <!-- Add other navigation links if necessary -->
      </nav>
    </header>

    <!-- Route view -->
    <main>
      <!-- Pass an empty string for the `pdfFileName` prop on the home page -->
      <router-view :pdfFileName="hoormazd" />
    </main>

    <footer>
      <!-- <p>© 2023 Amir&Mmti</p> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b1bbc6;
  margin: -10px;
  background-color: rgba(51, 51, 51, 1);
}
</style>




