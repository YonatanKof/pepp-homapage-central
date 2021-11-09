<template>
	<section>
		<img src="../assets/pepperi-logo-full.svg" alt="">
		<h1 class="title-3xl color-system">Pepperi's Homepage Central</h1>
        <h2 class="body-lg">Click the links above to see our designs in action</h2>
	</section>
</template>

<style lang="scss" scoped>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2rem;
		@include content-spacing;
		height: 100vh;
		background-color: #F7F7F7;
		img {
			max-width: 24rem;
		}
	}
	
</style>