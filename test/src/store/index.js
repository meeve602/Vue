import Vue from 'vue'
import Vuex from 'vuex'
//import state from '/state'
//import mutations from '.mutations'

//vuex核心概念


//getter 方法
//用于计算属性
//getters:{
//	doubleCity (state) {
//		return state.city + "" + state.city 
//	}
//}
//使用该计算属性
//import { mapGetters } from 'vuex'
//computed :{
//	...mapGetters(['doubleCity'])
//}

//module方法
//分割代码,
//再使用module进行整合

Vue.use(Vuex)

let defaultCity = '上海'

try {
	if (localStorage.city){
		defaultCity = localStorage.city
	}
	//localStorage方法，类似与cookie存放本地数据
	//try用于用户开启隐身模式防报错
} catch (e) {}

export default new Vuex.Store({
	state: {//该名字只能为state，是Vuex生态周期表中的共用数据储存
		city: defaultCity
	},
	actions: {
		changeCity(ctx,city){//Vuex生态周期表,action触法传递数据
//			alert(city)
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
//			alert(city)
			state.city = city
			try {
//				try用于用户开启隐身模式防报错
				localStorage.city = city
				//存放数据至本地
			} catch (e) {}
		}
	}
})