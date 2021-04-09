
<template>
	<div>
		<home-header></home-header>
		<!--<home-header :city = "city"></home-header>-->
		<home-swiper :swiperList = "swiperList"></home-swiper>
		<home-icons :iconList = "iconList" :desc = "desc"></home-icons>
		<home-recommend :recommendList = "recommendList"></home-recommend>
		<home-weekend :weekendList = "weekendList"> </home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './Header'
	import HomeSwiper from './Swiper'
	import HomeIcons from './Icons'
	import HomeRecommend from './Recommend'
	import HomeWeekend from './Weekend'
	import axios from 'axios'
	import { mapState } from 'vuex'
	
	export default{
		name:'Home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data (){
			return {
				swiperList:[],
				iconList:[],
				desc:[],
				recommendList:[],
				weekendList:[],
				lastCity:""
			}
		},
		computed :{
			...mapState(['city.value'])
		},

		methods:{
			getHomeInfoC ( ) {
				axios.get('/static/city.json?city' + this.city)
				.then(this.getHomeInfoCity)
			},
			getHomeInfoCity (res){
				res = res.data				
				if (res.ret && res.data){
					const data = res.data
					this.city = data.city
				}
			},
			
			getHomeInfoi ( ) {
//			
				axios.get('/static/index.json')
				.then(this.getHomeInfoIndex)

			},
			getHomeInfoIndex (res){
				res = res.data	
				if (res.ret && res.data){
					const data = res.data 
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.desc = data.desc
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList

				}
				
			}
			
		},

		mounted () {
			this.lastCity = this.city
			this.getHomeInfoC()
			this.getHomeInfoi()
		},

		activated () {
			if (this.lastCity !== this.city){
				this.lastCity = this.city
 
				this.getHomeInfoi()
			}
		}
		
	}
</script>

<style>
</style>