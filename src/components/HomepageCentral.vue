<template>
	<div class="main-links body-2xs">
		<router-link to="/">Home</router-link>
		<!-- <router-link to="/about">About</router-link> -->
		<router-link to="/eyewear-demo">Eyewear Demo</router-link>
	</div>
</template>

<style lang="scss">
.main-links {
	display: flex;
	flex-direction: row;
	gap: 1em;
	padding: 1rem;
	background-color: #5D8009;
	a{
		color: white;
		font-weight: 500;
	}
}
</style>
