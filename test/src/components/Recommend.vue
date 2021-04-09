<template>
	<div>
		<div class = ""></div>
		<ul>
			<router-link
				tag = "li" class = "item" v-for = "item of recommendList" :key = item.id :to = "'/detail/' + item.id">
						<img class = "item-img-contant" src = 'item.imgUrl'/>
					<div class = "item-info">
						<p class = "item-title">{{item.title}}</p>
						<p class = "item-desc">{{item.desc}}</p>
						<button class = "item-buttom">{{item.buttom}}</button>
					</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
 			recommendList : Array
  		},
		data(){
			return{

		}
	}
}
</script>

<style>
	.title{
		margin-top: .2rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;
	}
	.item{
		overflow: hidden;
		display: flex;
		height: 1.9rem;
	}
	.item-img-contant{
		width: 1.7rem;
		height:1.7rem;
		padding: .1rem;
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
	.item-buttom{
		line-height: 0.5rem;
		background: #ff9300;
		padding: .1rem;
		border-radius:.06rem ;
	}
</style>