<template>
	<div class = "search">
		<input class = "search-input" type = "text" placeholder="输入城市名"/>
	</div>
</template>

<script>
	export default {
		name: 'Search',
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
</style>