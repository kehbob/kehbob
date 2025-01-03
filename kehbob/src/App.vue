<template>
  <div id="app">
    <Nav v-if="$route.path !== '/'"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  components: { Nav },
} 
</script>

<style>
#app {
  height: 100%;
}
</style>