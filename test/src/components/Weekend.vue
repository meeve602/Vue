<template>
	<div>
		<ul class = "title">
			<li class = "item" v-for = "item of weekendList" :key = "item.id">
				<!--<div class = "item-img">-->
					<img class = "item-img-contant" src = 'item.imgUrl'/>
				<!--</div>-->
				<div class = "item-info">
					<p class = "item-title">{{item.title}}</p>
					<p class = "item-desc">{{item.desc}}</p>
				<!--	<button class = "item-buttom"></button>-->
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
		export default{
		name:'HomeWeekend',
		props:{
  		weekendList : Array//接受值
  },
}
</script>

<style>
	.title{
		margin-top: .2rem;
	}
	.item{
		overflow: hidden;
		display: flex;
		height: 1.9rem;
		/*background: red;*/
	}
	.item-img-contant{
		width: 100%;
	}
	.item-info{
		flex: 1;
		padding: .1rem;
	}
	.item-title{
		line-height: .54rem;
		font-size: .32rem;
	}
	.item-desc{
		line-height: .4rem;
		color: #ccc;
	}
	/*.item-buttom{
		line-height: 0.5rem;
		background: #ff9300;
		padding: .1rem;
		border-radius:.06rem ;
	}*/
</style>