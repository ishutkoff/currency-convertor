<template>
	<div
		class="b-currency-list__diff"
		:class="
			diff < 0 ? 'b-currency-list__diff--doun' : 'b-currency-list__diff--up'
		"
	>
		{{ diff }}
		{{ diff < 0 ? '▼' : '▲' }}
	</div>
</template>

<script setup>
const props = defineProps({
	diff: Number,
})
</script>

<style lang="scss" scoped>
.b-currency-list__diff {
	margin-left: 20px;

	&--doun {
		color: red;
	}

	&--up {
		color: green;
	}
}
</style>
