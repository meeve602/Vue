<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
	</div>
</template>

<script>
	import detailBanner from './Banner'
	import detailHeader from './DetailHeader'
	export default{
		name:'Detail',
		components: {
			detailBanner,
			detailHeader,
		},
	}
</script>

<style>
</style>