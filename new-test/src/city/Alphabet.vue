<template>
	<ul class = "rightListTop">
		<li 
			class = "rightList" 
			v-for = "(item,key) of letters" 
			:ref = "item"
			:key = "key"
			@click = "handleLetterClick"
			@torchstart = "handleTorchStart"
			@torchend = "handleTorchEnd"
			@torchmove = "handleTorchMove"
			>{{key}}</li>
	</ul>
</template>

<script>
	export default{
		name:'CityAlphabet',
		props: {
			cities: Object
		},
		computed:{
			letters(){
				const letters = []
				for (let i in this.cities){
					letters.push(i)
				}
				return letters 
		},
		data(){
			return{
				torchStatus : false ,
				startY : 0,
				timer : null
			}
		},
		updated(){
			this.startY = this.$refs['A'].offsetTop
		},
		methods: {
			handleLetterClick(e){
				this.$emit("change",e.target.innerText)
			},
			handleTorchStart(){
				this.torchStatus = true 	
			},
			handleTorchMove(e){
				if(this.torchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						const torchT = e.touches[0].clientY - 79
						const index = Math.floor((torchT - this.startY)/20)
						if(index >= 0 && index < this.letter.length){
							this.$emit('change',this.letters[index])
						}
					},16)
				}
			},
			handleTorchEnd(){
				this.torchStatus = false
			}
		}
		}
	}
</script>

<style>
	.rightListTop{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom: .41rem;
		width:.4rem;
	}
	.rightList{
		line-height: .4rem;
		text-align: center;
		color:#00BCD4 ; 
	}
</style>