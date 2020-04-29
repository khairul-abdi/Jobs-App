<template>
  <div id="app">
    <!-- <navbar></navbar> -->
    <router-view/>
  </div>
</template>

<script>
// import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    // Navbar
  }
}
</script>
<style>

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  /* background-color: aqua; */
}

#app {
  display: flex;
  height: 100%;
}
</style>
