<script setup>
// import Header from "../components/demo-eyewear/Header.vue";
import Slideshow from "../components/demo-eyewear/Slideshow.vue";
</script>

<template>
	<div>
		<h1>Foodies!!</h1>
		<main class="wrapper content food-grid">
			<Slideshow
				class="food-carousel"
				slidesHeight="100%"
				imageURL="/food-hero-1.jpg"
				slideTitle="Special Sweet Sale"
				slideSubTitle="4 Macaron box by BAKELUV for <strong>$20</strong>"
				buttonText="Shop Now!"
				buttonLink="https://wwape.com/"
			/>
			<div class="food-sidebar">sidebar</div>
			<div class="food-categories">categories</div>
		</main>
	</div>
</template>

<style lang="scss">
.food-grid {
	display: grid;
	grid-template-areas: "food_carousel food_sidebar" "food_categories food_sidebar";
	grid-template-rows: 26rem 1fr;
	grid-template-columns: 1fr 216px;
	grid-column-gap: 24px;
	padding: 24px;
	max-width: 1464px;
	background-color: rgb(248, 248, 248);
}
.food-carousel {
	grid-area: food_carousel;
}
.food-sidebar {
	grid-area: food_sidebar;
}
.food-categories {
	grid-area: food_categories;
}
</style>
