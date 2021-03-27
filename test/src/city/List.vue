<template>
	<div class = "list" ref = "wrapper">
		<div>
			<div class = "area">
				<div class = "titleOfList borderOfList">当前城市</div>
				<div class = "button-list">
					<div class = "border-wrapper">
						<div class = "button">北京</div>
					</div>	
				</div>
			</div>
			<div class = "area">
				<div class = "titleOfList borderOfList">热门城市</div>
				<div class = "button-list">
					<div class = "border-wrapper"
						v-for = "item of hot"
						:key = "item.id"
						>
						<div class = "button">{{item.name}}</div>
					</div>
				</div>				
			</div>	
			<div class = "listOfList">
				<div class = "area" v-for = "(item,key) of cities" :key = "key" :ref = "key">
					<div class = "titleOfList borderOfList">{{key}}</div>
					<div class = "button-list">
						<div class = "listItem" v-for = "innerItem of item" :key = "innerItem.id">{{innerItem.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	
	export default{
		name: 'List',
		props: {
			hot:Array,
			cities: Object,
			a: String
		},
		
		mounted(){
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		watch :{//监听器
			a(){//监听器可以监听单个值的 变化
				if(this.a){
					const element = this.$refs[this.a][0]
					this.scroll.scrollToElement(element)
					console.log(element)
				}
//				
			}
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
		/*&:before
			border-color : #CACACA ;
		&:after
			border-color : #CACACA ;*/
	}
	.button-list{
		overflow: hidden;
		padding: .1rem;
	}
	.border-wrapper{
		/*position: absolute;*/
		float: left;
		width: 33.33%;
		/*height: .45rem;*/
		
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
		/*position: absolute;*/
		top:0;
		left: 0;
		right :0;
		bottom: 0;
		/*background: red;*/
	}
</style>