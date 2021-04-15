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
	import { ref , onMounted} from 'vue'
	import { useRoute } from 'vue-router'
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
			
			const route = useRoute()
			
			async function getDetailsInfo(){
    			let res = await axios.get('/static/detail.json', {
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

	}
</script>

<style>
</style>