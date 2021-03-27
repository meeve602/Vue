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
			@torchmove = :"handleTorchMove"
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
//			}
		},
		data(){
			return{
				torchStatus : false
			}
		},
		methods: {
			handleLetterClick(e){
				//console.log(e.target.innerText)//e.target.innerText获取点击下的字符
				this.$emit("change",e.target.innerText)
			},
			handleTorchStart(){
				this.torchStatus = true 	
			},
			handleTorchMove(e){
				if(this.torchStatus){
					const startY = this.$refs['A'][0].offsetTop
					const torchT = e.touches[0].clientY - 79
					const index = Math.floor((torchT - startY)/20)
					if(index >= 0 && index < this.letter.length){
						this.$emit('change',this.letters[index])
					}
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
		/*background: red;*/
	}
	.rightList{
		line-height: .4rem;
		text-align: center;
		color:#00BCD4 ; 
	}
</style>