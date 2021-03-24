<template>
	<ul class = "rightListTop">
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
		<li class = "rightList">A</li>
	</ul>
</template>

<script>
	export default{
		name:'CityAlphabet'
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