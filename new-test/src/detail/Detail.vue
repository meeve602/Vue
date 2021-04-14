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
	import { ref } from 'vue'
	import { useRoute } from 'vue-route'
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
		setup(){
			const sightName = ref('')
			const bannerImg = ref('')
			const gallaryImgs = ref([])
			const list = ref([])
			
			const route = useRoute
			
			asyns function getDetailsInfo(){
    			axios.get('/static/detail.json', {
        			params: {id: route.params.id}
      			})
    			res = res.data
    			const data = res.data
		        sightName.value = data.sightName
		        bannerImg.value = data.bannerImg
		        gallaryImgs.value = data.gallaryImgs
		        list.value = data.categoryList
    		}
			
			onMounted(() => {
				getDetailsInfo()
			})
			
			return {sightName,bannerImg,gallaryImgs,list}
		}
//		data () {
//	    return {
//	      	   	sightName: '',
//		        bannerImg: '',
//		      	gallaryImgs: [],
//		      	list: []
//  		}
//		},
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