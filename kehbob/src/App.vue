<template>
  <div id="app">

    <Transition name="fade">
      <router-view></router-view>
    </Transition>

  </div>
</template>

<script>
export default {
} 
</script>

<style>
#app {
  height: 100%;
}
</style>