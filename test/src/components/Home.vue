<!--新增3.17-->
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
//				city:'',			//通过绑定到组件
				swiperList:[],
				iconList:[],
				desc:[],
				recommendList:[],
				weekendList:[],
				lastCity:""
			}
		},
		computed :{
			...mapState(['city'])
		},
//		ajax请求
		methods:{
			getHomeInfoC ( ) {
				axios.get('/static/city.json?city' + this.city)//路径
//				axios.get('/static/index.json')
				.then(this.getHomeInfoCity)//发送到楼下
//				.then(this.)
			},
			getHomeInfoCity (res){
				res = res.data				//获取data内容
				if (res.ret && res.data){//后端正确返回结果且有data项
					const data = res.data
					this.city = data.city	//this到组件data
//					console.log(data)
				}
//				console.log(res)
			},
			
			getHomeInfoi ( ) {
//				axios.get('/static/city.json')//路径
				axios.get('/static/index.json')
				.then(this.getHomeInfoIndex)//发送到楼下

			},
			getHomeInfoIndex (res){
				res = res.data	
				if (res.ret && res.data){//后端正确返回结果且有data项
					const data = res.data 
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.desc = data.desc
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
//					console.log(res)

				}
				
			}
			
		},
//		生命周期钩子
		mounted () {
			this.lastCity = this.city
			this.getHomeInfoC()
			this.getHomeInfoi()
		},
//			当页面重新被执行时,该生命周期会被调用
		activated () {
			if (this.lastCity !== this.city){
				this.lastCity = this.city
//				城市变化重新发ajax请求
				this.getHomeInfoi()
			}
		}
		
	}
</script>

<style>
</style>