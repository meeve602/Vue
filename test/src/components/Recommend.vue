<template>
	<div>
		<div class = ""></div>
		<ul>
			<router-link
				tag = "li" class = "item" v-for = "item of recommendList" :key = item.id :to = "'/detail/' + item.id">
				<!--使用to跳转界面-->
					<!--<div class = "item-img">-->
						<img class = "item-img-contant" src = 'item.imgUrl'/>
					<!--</div>-->
					<div class = "item-info">
						<p class = "item-title">{{item.title}}</p>
						<p class = "item-desc">{{item.desc}}</p>
						<button class = "item-buttom">{{item.buttom}}</button>
					</div>
				<!--</li>-->
				<!--router-link默认被渲染为a标签，使用tag可使其不被渲染为A标签-->
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
//			recommendList:[{}
//			
//			]
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
		/*background: red;*/
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