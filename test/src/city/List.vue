<template>
	<div class = "list">
		<div class = "area">
			<div class = "titleOfList borderOfList">当前城市</div>
			<div class = "button-list">
				<div class = "border-wrapper">
					<div class = "button">北京</div>
				</div>
			</div>
		</div>
		<div class = "area">
			<div class = "titleOfList borderOfList">热门城市</div>
		</div>	
		<div class = "area">
			<div class = "titleOfList borderOfList">A</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'List',
	}
</script>

<style>
	.titleOfList{
		margin-top: .0rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;
	}
	.borderOfList{
		/*&:before
			border-color : #CACACA ;
		&:after
			border-color : #CACACA ;*/
	}
	.button-list{
		padding: .1rem;
	}
	.border-wrapper{
		float: left;
		width: 33.33%;
	}
	.button{
		margin: .1rem;
		text-align :center;
		border: .02rem soild #CCCCCC
	}
</style>