<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList = "data.swiperList"></home-swiper>
		<home-icons :iconList = "data.iconList" :desc = "desc"></home-icons>
		<home-recommend :recommendList = "data.recommendList"></home-recommend>
		<home-weekend :weekendList = "data.weekendList"> </home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './Header'
	import HomeSwiper from './Swiper'
	import HomeIcons from './Icons'
	import HomeRecommend from './Recommend'
	import HomeWeekend from './Weekend'
	import axios from 'axios'
	import { useStore } from 'vuex'
	import { reactive,onMounted} from 'vue'
	
	export default{
		name:'Home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		
		setup(){
			const data = reactive({
				swiperList:[],
				iconList:[],
				desc:[],
				recommendList:[],
				weekendList:[],
				lastCity:""
			})
			const store = useStore();
			const city = store.state.city
			async function getHomeInfoIndex (){
				let res = await axios.get('/static/index.json')
				res = res.data	
				if (res.ret && res.data){
					const result = res.data
					data.swiperList = result.swiperList
					data.iconList = result.iconList
					data.desc = result.desc
					data.recommendList = result.recommendList
					data.weekendList = result.weekendList
				}
			}
			onMounted(() => {
				getHomeInfoIndex()
			})
			return { data }
			
		}
	}
</script>

<style>
</style>