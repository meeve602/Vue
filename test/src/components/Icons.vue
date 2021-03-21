<template>
	<div class = 'icons'>
		<swiper>
			<swiper-slide>
			<!--<swiper-slide v-for="(page,index) of pages"  :key = "index">-->
				<div class = 'icon'  v-for="item of iconList"  :key = "item.id">
					<div class = 'icon-img'>
						<img class = 'con-composion' :src = "item.imgUrl"/>
						<div class = "icon-desc">
							{{item.desc}}
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>	
	<!--<div class="swiper-pagination"  slot="pagination"></div>-->
	</div>
</template>

<script>
		export default{
		name:'HomeIcons',
		props:{
  		iconList : Array,//接受值
  		desc : Array
  	},
		data () {
			return{

			}
		},
		computed:{
		pages () {
			const page = [];
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index / 8);
				if(!pages[page]){
					pages[page] = [];
				}
				pages[page].push(item);
			})
			return pages;
		}
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