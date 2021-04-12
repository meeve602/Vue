<template>
	<div>
		<city-header></city-header>
		<Search :cities = "cities" ></Search>
		<List :cities = "cities" :hot = "hotCities" :a = "a"></List>
		<City-Alphabet :cities = "cities"  @change = "changeworld"></City-Alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
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
  		},
  		data(){
  			return{
  				cities:{},
  				hotCities:{},
  				a:{}
  			}
  		},
  		methods:{
  			getCityInfo(){
  				axios.get('/static/city.json')
  				.then(this.getTheCity)
  			},
  			getTheCity(res){
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
  			},
  			changeworld(a){
				this.a = a 
  			}
  		},		
  		mounted(){
  			this.getCityInfo()
  		}
 }
</script>

<style>
</style>