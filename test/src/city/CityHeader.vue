<template>
	<div>
		<div class = "header">
			城市选择	
		</div>
		<router-link to = '/Header'>
			<div class = "left">
				<span class = "iconfont">&#xe7bf;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
	name: 'Cityheader',
};
</script>

<style>
	.header{
		position: relative;
		overflow : hidden;
		height : .86rem;
		line-height : .86rem;
		text-align : center;
		color : #FFFFFF;
		background: #00BCD4;
	}
	.left{
		position: absolute;
		/*position: relative;*/
		top :0;
		left :0;
		/*height: .86rem;*/
		/*padding-top: .3rem;*/
		/*padding-left:.3resm;*/
		width: .64rem;
		float: left;
		/*text-align: .4rem;*/
		/*font-size: .67rem;*/
		color : #FFFFFF;
		/*margin-top:.0.1rem;*/
		/*background: #00BCD4;*/
		padding-left:.2rem;
		width: .3rem;
		float: left;
		margin-top:.25rem;
	}
</style>