<template>
  <div id="app">
   <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>
#app {
 
}
@import'~bootstrap/dist/css/bootstrap.css';

</style>

