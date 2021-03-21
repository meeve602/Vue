<!--新增3.17-->
<template>
	 <div class = "flesh">
	 	<!--div的位置会影响滚动-->
	<swiper :options="swiperOption" >
    <!-- slides -->
	   
			<swiper-slide>
				<img src = "https://webstatic.mihoyo.com/ys/event/e20210317-fab/images/mask.e3f09839.png" class = "photo">
			</swiper-slide>
	   
			<!--轮播内容-->
			<swiper-slide>
				<img src = "https://webstatic.mihoyo.com/ys/event/e20210317-fab/images/wd_poster.62ee06c2.png" class = "photo">
			</swiper-slide>
			<!--<swiper-slide>I'm Slide 3</swiper-slide>
			<swiper-slide>I'm Slide 4</swiper-slide>
			<swiper-slide>I'm Slide 5</swiper-slide>
			<swiper-slide>I'm Slide 6</swiper-slide>
			<swiper-slide>I'm Slide 7</swiper-slide>-->
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			<!--<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next">不需要箭头</div>-->
			<!--<div class="swiper-scrollbar"   slot="scrollbar">不需要滚动条</div>-->
		 
  </swiper >
	 </div>
</template>

<script>
	export default{
		name:'HomeSwiper',
//		props:{
//			swiperList : array//接受值
//			},
		data(){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				}
			}
		}
	}
</script>

<style>
	 /*lang = "stylus" scoped*/
	.photo{
	/*	overflow:hidden;*/
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
	/*!important;首选执行该语句*/
</style>