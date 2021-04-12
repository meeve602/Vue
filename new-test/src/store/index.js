import Vuex from 'vuex'

let defaultCity = '上海'
try {
	if (localStorage.city){
		defaultCity = localStorage.city
	}
} catch (e) {}

export default Vuex.createStore({
	state: {
		city: defaultCity
	},
	actions: {
		changeCity(ctx,city){
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
			state.city = city
			try {
				localStorage.city = city
			} catch (e) {}
		}
	}
});