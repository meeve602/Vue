import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {//该名字只能为state，是Vuex生态周期表中的共用数据储存
		city: '上海'
	},
	actions: {
		changeCity(ctx,city){//Vuex生态周期表,action触法传递数据
//			alert(city)
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
			alert(city)
			state.city = city
		}
	}
})