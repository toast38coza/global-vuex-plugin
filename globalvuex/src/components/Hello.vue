<template>
  <div class="hello">
    <h1>The count is: {{ count }}</h1>
    <button @click='doIncrement' >Increment</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    count () {
      return this.$myStore.state.count
    }
  },
  methods: {
    doIncrement () {
      this.$myStore.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
