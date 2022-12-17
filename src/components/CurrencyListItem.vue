<template>
	<div class="b-currency-list__item" :title="props.currency.Name">
		{{ from }} 🠚 {{ to }}
		<currency-different :diff="diff" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import CurrencyDifferent from './CurrencyDifferent.vue'
const props = defineProps({
	currency: Object,
	reversed: Boolean,
})
const diff = computed(() => {
	if (props.reversed) {
		const diff = (
			1 / props.currency.Value -
			1 / props.currency.Previous
		).toFixed(4)
		return (diff > 0 ? '+' : '') + diff
	} else {
		const diff = (props.currency.Value - props.currency.Previous).toFixed(4)
		return (diff > 0 ? '+' : '') + diff
	}
})
const from = computed(() =>
	props.reversed ? '1 RUB' : '1 ' + props.currency.CharCode
)
const to = computed(() =>
	props.reversed
		? (1 / props.currency.Value).toFixed(4) + ' ' + props.currency.CharCode
		: props.currency.Value + ' RUB'
)
</script>

<style lang="scss" scoped>
.b-currency-list__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;
	margin-bottom: 17px;
}
</style>
