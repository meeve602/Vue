<template>
	<div class="Header">
		<div class = "header-left">
			<span class = "iconfont">&#xe7bf;</span>
			
		</div>
		<div class = "header-input">
			<span class = "iconfont">&#xe7be;</span>
			<!--内容/内容-->
		</div>
		<router-link to = '/City'>
		
			<div class = "header-right">
				{{this.$store.state.city}}
			
				<span class = "iconfont litleChange">&#xe7c0;</span>
			</div>
		</router-link>
		
	</div>
</template>

<script>
	export default {
  	name: 'HomeHeader',
 };
</script>
<style>
	
	.Header{
	display:flex;
	height: .86rem;
	background:#00bcd4;
	color:#fff;
	}
	.header-left{
	padding-left:.2rem;
	width: .3rem;
	float: left;
	margin-top:.25rem;
	}
	.header-input{
	padding-left: .1rem;
	flex:1;
	height:.64rem;
	line-height:.64rem;
	margin-top:.1rem;
	margin-left:.2rem;
	background :#fff;
	border-radius:.18rem;
	color:#ccc;
	}
	.header-right{
	min-width:1.4rem;
	float:right;
	text-align:center;
	margin-top:.25rem;
	color :#FFFFFF;
	}
	.litleChange{
	padding-left: .5rem;
	}
	
</style>s