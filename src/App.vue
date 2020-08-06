<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  data () {
    return{
      
    }
  },
  components: {
    "app-header":Header
  }
}
</script>

<style>

</style>
