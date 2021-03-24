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
			<div class = "button-list">
				<div class = "border-wrapper">
					<div class = "button">北京</div>
				</div>
				<div class = "border-wrapper">
					<div class = "button">北京</div>
				</div>
				<div class = "border-wrapper">
					<div class = "button">北京</div>
				</div>
			</div>				
		</div>	
		<div class = "listOfList">
			<div class = "area">
				<div class = "titleOfList borderOfList">A</div>
					<div class = "button-list">
						<div class = "listItem">S</div>
						<div class = "listItem">S</div>
					</div>
			</div>
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
		overflow: hidden;
		padding: .1rem;
	}
	.border-wrapper{
		/*position: absolute;*/
		float: left;
		width: 33.33%;
		/*height: .45rem;*/
		
	}
	.button{
		height: .45rem;
		padding-top: .2rem;
		margin: .1rem;
		text-align :center;
		border: .02rem soild #CCCCCC;
		background: #CACCCC;
	}
	.listItem{
		height:.38rem;
		padding-left: .11rem;
	}
	.List{
		overflow: hidden;
		position: absolute;
		top:0;
		left: 0;
		right :0;
		bottom: 0;
		background: red;
	}
</style>