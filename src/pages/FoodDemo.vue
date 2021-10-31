<script setup>
import Header from "../components/demo-food/Header.vue";
import Slideshow from "../components/demo-eyewear/Slideshow.vue";
import Sidebar from "../components/demo-food/Sidebar.vue";
import Categories from "../components/demo-food/Categories.vue";
</script>

<template>
	<div>
		<Header />
		<main class="wrapper content">
			<section class="food-grid">
				<Slideshow
					class="food-carousel"
					slidesHeight="24rem"
					imageURL="/food-hero-1.jpg"
					slideTitle="Special Sweet Sale"
					slideSubTitle="4 Macaron box by BAKELUV for <strong>$20</strong>"
					buttonText="Shop Now!"
					buttonLink="https://wwape.com/"
					:showButtons="false"
					:carouselRounded="true"
					:carouselShadow="true"
				/>
				<Sidebar class="food-sidebar" />
				<Categories class="food-categories" />
			</section>
		</main>
	</div>
</template>

<style lang="scss">
$food-bg-color: rgb(248, 248, 248);
.food-grid {
	display: grid;
	grid-template-areas: "food_carousel food_sidebar" "food_categories food_sidebar";
	grid-template-rows: 26rem 1fr;
	grid-template-columns: 1fr 13.5rem;
	grid-column-gap: 1.5rem;
	padding: 1.5rem;
	max-width: 92rem;
	background-color: $food-bg-color;
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
