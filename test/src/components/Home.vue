<!--新增3.17-->
<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './Header'
	import HomeSwiper from './Swiper'
	import HomeIcons from './Icons'
	import HomeRecommend from './Recommend'
	import HomeWeekend from './Weekend'
	import axios from 'axios'
	
	export default{
		name:'Home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		methods:{
			getHomeInfo ( ) {
				axios.get('/static/new_file.json')
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res){
				console.log(res)
			}
		},
		mounted () {
			this.getHomeInfo()
		}
	}
</script>

<style>
</style>