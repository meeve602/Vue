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
//	import { mapState } from 'vuex'

	//新语法
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
		
//		composition API 新语法
		setup(){//当组件被初始化时执行一次
			const data = reactive({//响应式函数
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
//				let res = await axios.get('/static/city.json?city' + city)
				let res = await axios.get('/static/index.json')
				res = res.data	
//				console.log(res.data)
				if (res.ret && res.data){
					const result = res.data
					data.swiperList = result.swiperList
					data.iconList = result.iconList
					data.desc = result.desc
					data.recommendList = result.recommendList
					data.weekendList = result.weekendList
				}
			}
//			function getHomeInfoCity(res){
//				res = res.data				
//				if (res.ret && res.data){
//					const result = res.data
//					data.city = result.city	
//				}
//			}
//			function getHomeInfoC(){
//				axios.get('/static/city.json?city' + this.city.value)
//				.then(this.getHomeInfoCity)
//			}
//			function getHomeInfoi(){
//				axios.get('/static/index.json')
//				.then(this.getHomeInfoIndex)
//			}
//			onMounted(() => {
//				data.lastCity = city
//				this.getHomeInfoC()
//				this.getHomeInfoi()
//			})
			onMounted(() => {//原组件改写方法
				getHomeInfoIndex()
			})
//			onActivated(() => {
//				if (this.lastCity !== this.city){
//				data.lastCity = this.city
//				this.getHomeInfoi()
//				}
//			})
			return { data }
			
		}
		
//		data (){
//			return {
//				swiperList:[],
//				iconList:[],
//				desc:[],
//				recommendList:[],
//				weekendList:[],
//				lastCity:""
//			}
////		},
//
//		computed :{
//			...mapState(['city'])
//		},
//		methods:{
////			getHomeInfoC ( ) {
////				axios.get('/static/city.json?city' + this.city)
////				.then(this.getHomeInfoCity)
////			},
//			getHomeInfoCity (res){
//				res = res.data				
//				if (res.ret && res.data){
//					const data = res.data
//					this.city = data.city	
//				}
//			},
//			
//			getHomeInfoi ( ) {
//				axios.get('/static/index.json')
//				.then(this.getHomeInfoIndex)
//
//			},
//			getHomeInfoIndex (res){
//				res = res.data	
//				if (res.ret && res.data){
//					const data = res.data 
//					this.swiperList = data.swiperList
//					this.iconList = data.iconList
//					this.desc = data.desc
//					this.recommendList = data.recommendList
//					this.weekendList = data.weekendList
//				}
//			}
//		},
//		mounted () {
//			this.lastCity = this.city
//			this.getHomeInfoC()
//			this.getHomeInfoi()
//		},
//		activated () {
//			if (this.lastCity !== this.city){
//				this.lastCity = this.city
//				this.getHomeInfoi()
//			}
//		}
	}
</script>

<style>
</style>