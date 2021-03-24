<template>
	<div>
		<!--关联组件不分大小写，可以有“-”号，但名字必须匹配-->
		<city-header></city-header>
		<Search></Search>
		<List></List>
		<City-Alphabet></City-Alphabet>
	</div>
</template>

<script>
	import CityHeader from './CityHeader'
	import Search from './Search'
	import List from './List'
	import CityAlphabet from './Alphabet'
	
	export default {
  		name: 'City',
  		components: {
			CityHeader,
			Search,
			List,
			CityAlphabet,
  		}
 	};
</script>

<style>
</style>