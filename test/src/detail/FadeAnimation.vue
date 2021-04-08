<template>
	<transition>
		<slot></slot>
	</transition>
</template>

<script>
	export default{
		name : 'FadeAnimation'
	}
</script>

<style>
	.v-enter{
		opactiy:0;
	}
	.v-leave-to{
		opactiy:0;
		}
	.v-enter-active{
		transition: opactiy .8s;
	}
	.v-leave-active{
		transition: opactiy .8s;
	}
</style>