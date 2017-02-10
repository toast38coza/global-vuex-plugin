<template>
  <div class="hello">
    <h1>The count is: {{ count }}</h1>
  </div>
</template>

<script>
import store from '../store'
export default {
  store,
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: store.state.count
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
