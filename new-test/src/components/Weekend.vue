<template>
	<div>
		<ul class = "title">
			<li class = "item" v-for = "item of weekendList" :key = "item.id">
					<img class = "item-img-contant" src = 'item.imgUrl'/>
				<div class = "item-info">
					<p class = "item-title">{{item.title}}</p>
					<p class = "item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
		export default{
		name:'HomeWeekend',
		props:{
  		weekendList : Array
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
</style>