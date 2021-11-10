<template>
	<div class="main-links">
		<router-link class="body-xs" to="/">Home</router-link>
		<router-link class="body-xs" to="/eyewear-demo">Eyewear Demo</router-link>
		<router-link class="body-xs" to="/food-demo">Food Demo</router-link>
	</div>
</template>

<style lang="scss">
:root {
	--main-links-height: 3rem;
}
.main-links {
	height: var(--main-links-height);
	z-index: 10000;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
	padding: 0 1rem;
	@include content-spacing;
	background-color: #5d8009;
	a {
		color: white;
		font-weight: 500;
	}
}
</style>
