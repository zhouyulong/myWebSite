<template>
  <div id="app">
    <NavBar/>
    <router-view style="margin-top:64px;"/>
  </div>
</template>

<style>

</style>
<script>
  import NavBar from './views/NavBar'
  export default {
    name: 'app',
    components: {
      NavBar,
    },
  };
</script>