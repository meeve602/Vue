<!--新增3.17-->
<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
	</div>
</template>

<script>
	import HomeHeader from './Header'
	import HomeSwiper from './Swiper'
	import HomeIcons from './Icons'
	import HomeRecommend from './Recommend'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend
		}
	}
</script>

<style>
</style>