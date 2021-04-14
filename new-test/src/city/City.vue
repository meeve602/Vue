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
  		//经典API改写
  		setup(){
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
  			function changeworld(){
  				data.a = a 
  			}
  			onMounted(() => {
  				getCityInfo()
  			})
  			return { data }
  		}

//		methods:{
//			getCityInfo(){
//				axios.get('/static/city.json')
//				.then(this.getTheCity)
//			},
//			getTheCity(res){
//				res = res.data
//				if(res.ret && res.data){
//					const data = res.data
//					this.cities = data.cities
//					this.hotCities = data.hotCities
//				}
//			},
//			changeworld(a){
//				this.a = a 
//			}
//		},		
//		mounted(){
//			this.getCityInfo()
//		}
 }
</script>

<style>
</style>