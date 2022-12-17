<template>
	<top-navigation />
	<div class="main">
		<router-view></router-view>
	</div>
</template>

<script setup>
import TopNavigation from './components/TopNavigation.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
	store.dispatch('fetchCurrencyList')
})
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	min-width: 320px;
	font-family: Arial, Helvetica, sans-serif;
}
.main {
	max-width: 1200px;
	padding: 0 20px;
	margin: 0 auto;
}
</style>
