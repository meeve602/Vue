<template>
	<div>
		<detail-banner
		:sightName="sightName"
      	:bannerImg="bannerImg"
      	:bannerImgs="gallaryImgs">
      	</detail-banner>
		<detail-header></detail-header>
		<div class="content">
		<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import detailBanner from './Banner'
	import detailHeader from './DetailHeader'
	import detailList from './detailList'
	import axios from 'axios'
	export default{
		name:'Detail',
		components: {
			detailBanner,
			detailHeader,
			detailList,
		},
		data () {
	    return {
	      	   	sightName: '',
		        bannerImg: '',
		      	gallaryImgs: [],
		      	list: []
    		}
		},
    	methods:{
    		getDetailsInfo(){
    			axios.get('/static/detail.json', {
        			params: {
          				id: this.$route.params.id
        			}
      			}).then(this.handleGetDataSucc)
    		},
    		handleGetDataSucc(res){
    			res = res.data
    			const data = res.data
//  			console.log(data)
		        this.sightName = data.sightName
		        this.bannerImg = data.bannerImg
		        this.gallaryImgs = data.gallaryImgs
		        this.list = data.categoryList
    		}
    	},
    	mounted () {
    		this.getDetailsInfo()
    	}
  
	}
</script>

<style>
</style>