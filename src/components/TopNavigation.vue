<template>
	<nav class="b-top-nav">
		<div class="b-top-nav__wrapper">
			<router-link to="/">Список валют</router-link>
			<router-link to="/converter">Конвертер валют</router-link>
		</div>
	</nav>
</template>

<script setup>
// script setup logic
</script>

<style lang="scss">
.b-top-nav {
	background: #343131;
	margin-bottom: 20px;

	&__wrapper {
		display: flex;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		height: 50px;
	}

	a {
		color: #fff;
		margin-right: 20px;
		font-size: 18px;
		text-decoration: none;

		&.router-link-active {
			color: greenyellow;
		}
	}
}
</style>
