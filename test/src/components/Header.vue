<template>
	<div class="Header">
		<div class = "header-left">
			<span class = "iconfont">&#xe7bf;</span>
			<!--此处插入icon为网上引入-->
		</div>
		<div class = "header-input">
			<span class = "iconfont">&#xe7be;</span>
			内容/内容
		</div>
		<router-link to = '/City'>
			<!--使用link标签进行页面跳转-->
			<div class = "header-right">
				{{this.$store.state.city}}
				<!--引用全局定义组件，store为组件明，state为执行周期函数，city为被引用的函数-->
				<span class = "iconfont litleChange">&#xe7c0;</span>
			</div>
		</router-link>
		<!--i like Vue测试成功-->
	</div>
</template>

<script>

	export default {
  	name: 'HomeHeader',
//	console.log(this.$store.stare.city)
//	props:{
//		city :String//接受值
//	}
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
	/*min-width	防换行*/
	min-width:1.4rem;
	float:right;
	text-align:center;
	margin-top:.25rem;
	color :#FFFFFF;
		.litleChange{
			padding-left: .5rem;
		}
	}
</style>s