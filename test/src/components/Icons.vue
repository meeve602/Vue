<template>
	<div class = 'icons'>
				<div class = 'icon'>
					<img class = 'icon-img' src = "https://pr1-greenteacdn.lenovo.com.cn/config/1606990758564_72x72_看图王.png"/>
					
		
		</div>
				<!--<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>
				<div class = 'icon'>
		
		</div>-->
		
	
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
		background: darkgreen;
	}
	.icon{
		float :left;
		width :25%;
		padding-bottom: 25%;s
		background: red;
	}
	.icon-img{
		position: absolute;
		top :0;
		left :0;
		right :0;
		bottom :.44rem;
		box-sizing: border-box;
		padding: .1rem;
		background: blue;
		
	}
</style>