<script setup>
import Header from "../components/demo-food/Header.vue";
import Slideshow from "../components/demo-eyewear/Slideshow.vue";
import Sidebar from "../components/demo-food/Sidebar.vue";
import Categories from "../components/demo-food/Categories.vue";
</script>

<template>
	<div>
		<Header />
		<main class="main-food">
			<section class="wrapper food-grid">
				<Slideshow
					class="food-carousel"
					imageURL="/food-hero-1.jpg"
					slideTitle="Special Sweet Sale"
					slideSubTitle="4 Macaron box by BAKELUV for <strong>$20</strong>"
					buttonText="Shop Now!"
					buttonLink="https://wwape.com/"
					:showButtons="false"
					:carouselRounded="true"
					:carouselShadow="true"
					:controllersIsInside="true"
					:makeRed="false"
				/>
				<Sidebar class="food-sidebar" />
				<Categories class="food-categories" />
			</section>
		</main>
	</div>
</template>

<style lang="scss">
$food-bg-color: rgb(248, 248, 248);
$food-grid-gap: 1.5rem;
.main-food {
	height: calc(100vh - (var(--main-links-height) + var(--header-height)));
	background-color: $food-bg-color;
}
.food-grid {
	display: grid;
	grid-template-areas: "food_carousel food_sidebar" "food_categories food_sidebar";
	grid-template-rows: 24rem 1fr;
	grid-template-columns: 1fr 13.5rem;
	grid-column-gap: 1.5rem;
	max-width: $screen-2xl;
	gap: $food-grid-gap;
	padding: 1.5rem;
	@media screen and (max-width: $screen-lg) {
		grid-template-areas: "food_carousel food_sidebar" "food_categories food_categories";
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr 12rem;
	}
	@media screen and (max-width: $screen-md) {
		grid-template-areas: "food_carousel" "food_categories";
		grid-template-rows: 26rem 1fr;
		grid-template-columns: 1fr;
		padding: 0;
		background-color: aquamarine;
	}
	@media screen and (max-width: $screen-sm) {
		gap: 1rem;
	}
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
.carousel-rounded {
	@media screen and (max-width: $screen-md) {
		border-radius: 0;
	}
}
</style>
