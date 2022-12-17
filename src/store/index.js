import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			currencyList: [],
			currencyFilteredList: [],
		}
	},
	actions: {
		async fetchCurrencyList({ commit }) {
			const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
			const result = await res.json()
			commit('setCurrencyList', result)
		},
	},
	mutations: {
		setCurrencyList(state, currencies) {
			state.currencyList = Object.values(currencies.Valute)
			state.currencyFilteredList = state.currencyList
		},

		filterCurrencyList(state, filter) {
			state.currencyFilteredList = state.currencyList
			let searchRegex = new RegExp(filter, 'i')
			state.currencyFilteredList = state.currencyList.filter(function (elem) {
				return (
					!filter ||
					searchRegex.test(elem.Name) ||
					searchRegex.test(elem.CharCode)
				)
			})
		},
	},
})
