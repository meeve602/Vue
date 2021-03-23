<template>
	<div>
		<!--关联组件不分大小写，可以有“-”号，但名字必须匹配-->
		<city-header></city-header>
		<Search></Search>
	</div>
</template>

<script>
	import CityHeader from './CityHeader'
	import Search from './Search'
	
	export default {
  		name: 'City',
  		components: {
			CityHeader,
			Search,
  		}
 	};
</script>

<style>
</style>