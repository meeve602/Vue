<template>
	<div>
		<city-header></city-header>
		<Search :cities = "data.cities" ></Search>
		<List :cities = "data.cities" :hot = "data.hotCities" :a = "data.a"></List>
		<City-Alphabet :cities = "data.cities"  @change = "changeworld"></City-Alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './CityHeader'
	import Search from './Search'
	import List from './List'
	import CityAlphabet from './Alphabet'
	import { reactive,onMounted } from 'vue'
	
	export default {
  		name: 'City',
  		components: {
			CityHeader,
			Search,
			List,
			CityAlphabet,
  		},
  		setup(){
		const { data } = useCityLogic()
		return { data }

		function useCityLogic(){
  			const data = reactive({
	  				cities:{},
	  				hotCities:{},
	  				a:{}
	  				})
  			async function getCityInfo(){
  				let res = await axios.get('/static/city.json')
  				res = res.data
				if(res.ret && res.data){
					const result = res.data
					data.cities = result.cities
					data.hotCities = result.hotCities
				}
  			}
  		onMounted(() => {getCityInfo()})
  		return { data }
		}
  	}	
 }
</script>

<style>
</style>