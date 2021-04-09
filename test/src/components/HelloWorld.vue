<template>
	<div>
  	<div class="hello">helloworld</div>
  	<router-link to="/Header" class="hello">a</router-link>
  	<!--单页面function-->
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
//<!--新增3.17-->
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
