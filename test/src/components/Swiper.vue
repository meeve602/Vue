
<template>
	<div class = "flesh">
	
		<swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
	   
			<swiper-slide v-for = "item of swiperList" :key = "item.id">
				<img :src = "item.imgUrl" class = "photo"/>
			</swiper-slide>
	   
	
			<!--<swiper-slide>
				<img src = "https://webstatic.mihoyo.com/ys/event/e20210317-fab/images/wd_poster.62ee06c2.png" class = "photo">
			</swiper-slide>-->
			<!--<swiper-slide>I'm Slide 3</swiper-slide>
			<swiper-slide>I'm Slide 4</swiper-slide>
			<swiper-slide>I'm Slide 5</swiper-slide>
			<swiper-slide>I'm Slide 6</swiper-slide>
			<swiper-slide>I'm Slide 7</swiper-slide>-->
			<!-- Optional controls -->
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