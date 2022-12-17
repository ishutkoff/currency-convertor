<template>
	<div class="b-currency-list">
		<div class="b-currency-list__search-wrapper">
			<input
				@input="filter"
				v-model="search"
				type="text"
				placeholder="Введите код или название валюты"
			/>
			<button @click="revers">⇄</button>
		</div>
		<currency-list-item
			v-for="currency of currencyFilteredList"
			:key="currency.ID"
			:currency="currency"
			:reversed="reversed"
		/>
	</div>
</template>

<script setup>
import CurrencyListItem from '../components/CurrencyListItem.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const reversed = ref(false)
const search = ref('')

const currencyFilteredList = computed(() => store.state.currencyFilteredList)

function filter() {
	store.commit('filterCurrencyList', search.value)
}

function revers() {
	reversed.value = !reversed.value
}
</script>

<style lang="scss" scoped>
.b-currency-list {
	&__search-wrapper {
		input {
			padding: 10px 20px;
			width: 270px;
			margin-bottom: 20px;
		}
		button {
			padding: 5px 18px;
			margin-left: 20px;
			font-size: 22px;
			background: #343131;
			color: #fff;
			border-radius: 5px;
			cursor: pointer;
			border: none;
		}
	}
}
</style>
