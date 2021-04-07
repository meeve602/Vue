<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
		<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import detailBanner from './Banner'
	import detailHeader from './DetailHeader'
	import detailList from './DetailList'
	export default{
		name:'Detail',
		components: {
			detailBanner,
			detailHeader,
			detailList,
		},
		data () {
	    return {
	      	list: [{title: "你好啊"}]
    }
  },
	}
</script>

<style>
</style>