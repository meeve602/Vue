<template>
	<div>
	    <div class="banner" @click="handleBannerClick">
	      	<img class="banner-img">
	      	<div class="banner-info">
	        	<div class="banner-tittle">
	          {{this.sightName}}
	        	</div>
	        	<div class="banner-number">
	          		<span class="iconfont banner-icon">&#xe7c0;</span>
	          {{this.bannerImgs.length}}
	        	</div>
	      	</div>
	    </div>
	    <fade-animation>
	      	<Common-Gallary
		       :imgs = "imgs"
		       v-show = "showGallary"
		       @close = "handleGallaryClose"
	      	></Common-Gallary>	      	
	    </fade-animation>
	    
  </div>
	
</template>

<script>
	import { ref } from 'vue'
	import CommonGallary from './CommonGallary'
	import FadeAnimation from './FadeAnimation'
	
	export default{
		name:'Banner',
		props: {
		    sightName: String,
		    bannerImg: String,
		    bannerImgs: Array
  			},
  		components:{
			CommonGallary,
			FadeAnimation
			
		},	
  		setup(){
  			const showGallary = ref(false)
  			
  			function handleBannerClick(){
				showGallary = true
			}
  			function handleGallaryClose(){
				showGallary = false
			}
  			return { showGallary , handleBannerClick , handleGallaryClose}
  		}	
	}
</script>

<style>
	.banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    }
    .banner-img{
      width: 100%;
      }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      }
      .banner-tittle{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
        }
      .banner-number{
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        font-size: .24rem;
        }
        .banner-icon{
          font-size: .24rem;
          }
</style>