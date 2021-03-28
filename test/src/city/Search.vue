<template>
	<div>
		<div class = "search">
			<input v-model = "keyword" class = "search-input" type = "text" placeholder="输入城市名"/>
		</div>
		<div class = "search-content">
			<ul>
				<li v-for = "item of list">
					{{item.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Search',
		props: {
			cities: Object
		},
		data (){
			return{
				keyword: '',
				list:[],
				timer:null
			}
		},
		watch:{
			keyword (){
				if (this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const result = []
					for(let i in this.cities){
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value)
							}
						})
					}
					this.list = result
				}, 100)
			}
		}
	};
</script>

<style>
	.search{
		height : .72rem;
		padding : .1rem;
		background: #00BCD4;
	}
	.search-input{
		box-sizing: border-box;
		width: 100%;
		height :.62rem;
		padding: .1rem;
		line-height: .62rem;
		text-align: center;
		border-radius: .06rem;
		color: #666;
	}
	.search-content{
		z-index:1;
		overflow:hidden;
		position:absolute;
		top:1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		background: lawngreen;
	}
</style>