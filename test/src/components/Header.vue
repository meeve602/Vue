<template>
	<div class="Header">
		<!--新增3.17-->
		<div class = "header-left">
			<span class = "iconfont"></span>
			<!--此处插入icon为网上引入-->
		</div>
		<div class = "header-input">
			<span class = "iconfont">&#xe7be;</span>
			内容/内容
		</div>
		<div class = "header-right">
			城市
			<span class = "iconfont litleChange">&#xe7c0;</span>
		</div>
		<!--i like Vue测试成功-->
	</div>
</template>

<script>

	export default {
  	name: 'HomeHeader',
//	新增3.17
 };
 
</script>


<!--lang = "stylus"scoped-->
<style>
	/*@import url("../assets/styles/varibles.styl");*//*引入全局样式  */
	/*设置全局样式容易报错*/
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
	width:1.2rem;
	float:right;
	text-align:center;
	margin-top:.25rem;
		.litleChange{
			padding-left: .5rem;
		}
	}
</style>s