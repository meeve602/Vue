<template>
	<ul class = "rightListTop">
		<li 
			class = "rightList" 
			v-for = "(item,key) of cities" 
			:key = "key"
			@click = "handleLetterClick"
			@torchstart = "handleTorchStart"
			@torchend = "handleTorchMove"
			>{{key}}</li>
	</ul>
</template>

<script>
	export default{
		name:'CityAlphabet',
		props: {
			cities: Object
		},
		methods: {
			handleLetterClick(e){
				//console.log(e.target.innerText)//e.target.innerText获取点击下的字符
				this.$emit("change",e.target.innerText)
			}
		}
	}
</script>

<style>
	.rightListTop{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom: .41rem;
		width:.4rem;
		/*background: red;*/
	}
	.rightList{
		line-height: .4rem;
		text-align: center;
		color:#00BCD4 ; 
	}
</style>