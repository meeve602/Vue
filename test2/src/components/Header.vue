<template>
	<div class="Header">
		<div class = "header-left">返回</div>
		<div class = "header-input">内容/内容</div>
		<div class = "header-right">城市</div>
		<!--i like Vue测试成功-->
	</div>
</template>

<script>

	export default {
  	name: 'Header',
 };
 
</script>


<!--lang = "stylus"scoped-->
<style>
	.Header{
	display:flex;
	height: .86rem;
	background:#00bcd4;
	color:#fff;
	}
	.header-left{
	width: .64rem;
	float: left;
	}
	.header-input{
	flex:1;
	height:.64rem;
	margin-top:.12rem;
	margin-left:.2rem;
	background :#fff;
	border-radius:.1rem;
	color:#ccc;
	}
	.header-right{
	width:1.24rem;
	float:right;
	text-align:center;
	}
</style>