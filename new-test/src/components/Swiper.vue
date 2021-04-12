<template>
	<div class = "flesh">
		<swiper :options="swiperOption" v-if="showSwiper">
			<swiper-slide v-for = "item of swiperList" :key = "item.id">
				<img :src = "item.imgUrl" class = "photo"/>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		props:{
			swiperList : Array
			},
		data(){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				}
			}
		},
		computed:{
			showSwiper(){
				return this.swiperList.length
			}
		}
	}
</script>

<style>
	.photo{
		width: 100%;
	}
	.flash{
		overflow:hidden;
		width: 100%;
		height:0 ;
		padding-bottom: 32.5%;
	}
	.flash >>> .swiper-pagination-bullets-active{
		background: #FFFFFF ; 
	}
</style>