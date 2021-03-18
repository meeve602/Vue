<template>
	<div class = 'icons'>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>
		<div class = 'icon'>
			<div class = 'icon-img'>
				<img class = 'con-composion' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
				<div class = "icon-desc">
					gualaguala
				</div>
			</div>
		</div>

	
	</div>
</template>

<script>
		export default{
		name:'HomeIcons',
		data(){
	
		}
	}
</script>

<style>
	.icons{
		overflow : hidden;
		height : 0;
		padding-bottom: 50%;
		/*background: darkgreen;*/
	}
	.icon{
		position: relative;
		overflow: hidden;
		float :left;
		width :25%;
		padding-bottom: 25%;
		/*background: red;*/
		height: 0;
	}
	.icon-img{
		position: absolute;
		top :0;
		left :0;
		right :0;
		bottom :.44rem;
		box-sizing: border-box;
		padding: .1rem;
		/*background: blue;*/
		
	}
	.con-composion{
		height: 100%;
		display: block;
		margin: 0 auto;
		
		
	}
	.icon-desc{
		position:absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: .30rem;
		line-height: 1rem;
		color: #333333;
		text-align: center;
	}
</style>