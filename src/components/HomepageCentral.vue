<template>
	<div class="main-links body-2xs">
		<router-link to="/">Home</router-link>
		<router-link to="/eyewear-demo">Eyewear Demo</router-link>
		<router-link to="/food-demo">Food Demo</router-link>
	</div>
</template>

<style lang="scss">
.main-links {
	--main-links-height: 3rem;
	height: var(--main-links-height);
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
	padding: 0 1rem;
	@include content-spacing;
	background-color: #5D8009;
	a{
		color: white;
		font-weight: 500;
	}
}
</style>
