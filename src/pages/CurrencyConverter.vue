<template>
	<div class="currency-converter">
		<div class="currency-converter__select-wrapper">
			<div class="currency-converter__select-title">Выберите валюту:</div>
			<select v-model="currentCurrency">
				<option
					v-for="currency of currencyList"
					:value="currency"
					:key="currency.ID"
				>
					{{ currency.CharCode }} - {{ currency.Name }}
				</option>
			</select>
		</div>

		<div class="currency-converter__work-space">
			<div class="currency-converter__input">
				<div class="currency-converter__input-title">
					{{ reversed ? 'RUB' : currentCurrency.CharCode }}
				</div>
				<input v-model="fromValue" type="text" />
			</div>
			<button @click="revers">⇄</button>
			<div class="currency-converter__input">
				<div class="currency-converter__input-title">
					{{ reversed ? currentCurrency.CharCode : 'RUB' }}
				</div>
				<input v-model="toValue" type="text" readonly />
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const stor = useStore()
const currentCurrency = ref({})
const fromValue = ref(1)
const toValue = computed(() => {
	return reversed.value
		? ((fromValue.value * 1) / currentCurrency.value.Value).toFixed(4)
		: (fromValue.value * currentCurrency.value.Value).toFixed(4)
})
const reversed = ref(false)
const currencyList = computed(() => {
	const list = stor.state.currencyList
	currentCurrency.value = list[0]
	return list
})

function revers() {
	reversed.value = !reversed.value
}
</script>

<style lang="scss" scoped>
.currency-converter {
	select {
		padding: 10px 20px;
		width: 270px;
		margin-bottom: 20px;
	}
	&__select-title {
		margin-bottom: 10px;
	}

	&__work-space {
		display: flex;

		button {
			padding: 5px 18px;
			margin-left: 20px;
			margin-right: 20px;
			font-size: 22px;
			background: #343131;
			color: #fff;
			border-radius: 5px;
			cursor: pointer;
			border: none;
		}

		input {
			padding: 10px 20px;
		}
	}

	&__input {
		position: relative;
		display: flex;
		align-items: center;

		&-title {
			position: absolute;
			right: 10px;
		}
	}
}
</style>
