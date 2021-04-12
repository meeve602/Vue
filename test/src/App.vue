<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive exclude = "Detail">	
    	<!--除了detail组件不会被缓存-->
    	<router-view/>
    </keep-alive>
    <!--keep-alive使代码缓存起来，不会频繁调用json-->
    <!--使用keep-alive后，生命周期函数会多activated不会生效--> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
<!--完成迁移-->