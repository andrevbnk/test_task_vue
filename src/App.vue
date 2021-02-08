<template>
  <div id="app">
    <router-view/>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getLoading']),
     isLoading: function(){
       return this.getLoading;
     },
  },
  components: {
    Loader,
  },
}
</script>

<style>
html,body{
  height: 100%!important;
  margin: 0;
  background: #2c3e50!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a{
  cursor: pointer;
}
</style>
