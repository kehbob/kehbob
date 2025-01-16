<template>
  <div id="nav">
    <nav>
      <ul class="nav-contain" v-for="item in navlists" :key="index">
        <li @click="listClick"> {{ item.text }} </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data:() => ({
    navlists: [
      {text: 'a'},
      {text: 'b'},
      {text: 'c'},
      {text: 'd'}
    ],
  }),
  methods: {
    listClick(e) {
      this.$emit("listCick", e);
    }
  }

}
</script>

<style>

</style>