<template>
	<div>
	    <div class="banner" @click="handleBannerClick">
	      	<img class="banner-img">
	      	<div class="banner-info">
	        	<div class="banner-tittle">
	          <!--{{this.sightName}}-->aa
	        	</div>
	        	<div class="banner-number">
	          		<span class="iconfont banner-icon">&#xe7c0;</span>
	          <!--{{this.bannerImgs.length}}-->aa
	        	</div>
	      	</div>
	    </div>
	    <!--<fade-animation>-->
	    	<!--possible to use-->
	      	<Common-Gallary
		       :imgs = "imgs"
		       v-show = "showGallary"
		       @close = "handleGallaryClose"
	      	></Common-Gallary>
	      	
	    <!--</fade-animation>-->
	    
  </div>
	
</template>

<script>
	import CommonGallary from './CommonGallary'
	export default{
		name:'Banner',
		data () {
			return{
				showGallary : false,
				imgs:['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif']
			}
		},
		methods: {
			handleBannerClick(){
				this.showGallary = true
			},
			handleGallaryClose(){
				this.showGallary = false
			}
		},
		components:{
			CommonGallary,
//			FadeAnimation
			
		},
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
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
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