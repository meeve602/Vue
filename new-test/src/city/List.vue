<template>
	<div class = "list" ref = "wrapper">
		<div>
			<div class = "area">
				<div class = "titleOfList borderOfList">当前城市</div>
				<div class = "button-list">
					<div class = "border-wrapper">
						<div class = "button">{{this.$store.state.city}}</div>
					</div>	
				</div>
			</div> 
			<div class = "area">
				<div class = "titleOfList borderOfList">热门城市</div>
				<div class = "button-list">
					<div class = "border-wrapper"
						v-for = "item of hot"
						:key = "item.id"
						@click = "handleCityClick(item.name)"
						>
						<div class = "button">{{item.name}}</div>
					</div>
				</div>				
			</div>	
			<div class = "listOfList">
				<div class = "area" v-for = "(item,key) of cities" :key = "key" :ref = "elem => elems[key] = elem">
					<div class = "titleOfList borderOfList">{{key}}</div>
					<div class = "button-list">
						<div class = "listItem" v-for = "innerItem of item" :key = "innerItem.id" @click = "handleCityClick(innerItem.name)">{{innerItem.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { watch,ref,onMounted } from 'vue'
	import { useStore } from 'vuex'
	import { useRouter } from 'vue-router'
	export default{
		name: 'List',
		props: {
			hot:Array,
			cities: Object,
			a: String
		},
		setup(props){
			const store = useStore()
			const router = useRouter()
			const currentCity = store.state.currentCity
			const elems = ref({})
			const wrapper = ref(null)
			const scoll = null
			
			function handleCityClick(city){
				store.commit('changeCity',city)
				router.push('/Header')
			}
		watch(() => props.a , (a,prea) =>{
			if(a){
					const element = elems.value[a]
					scroll.scrollToElement(element)
				}			
		})
		onMounted(() =>{
			scroll = new Bscroll(wrapper.value),{
				click:true
			}
		})
		return { elems,currentCity,handleCityClick,wrapper }
		}
	}
</script>

<style>
	.titleOfList{
		margin-top: .0rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;
	}
	.borderOfList{
	}
	.button-list{
		overflow: hidden;
		padding: .1rem;
	}
	.border-wrapper{
		float: left;
		width: 33.33%;
	}
	.button{
		height: .45rem;
		padding-top: .2rem;
		margin: .1rem;
		text-align :center;
		border: .02rem soild #CCCCCC;
		background: #CACCCC;
	}
	.listItem{
		height:.38rem;
		padding-left: .11rem;
	}
	.list{
		overflow: hidden;
		top:0;
		left: 0;
		right :0;
		bottom: 0;
	}
</style>