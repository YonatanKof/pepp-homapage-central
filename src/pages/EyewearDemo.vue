<script setup>
import Header from "../components/demo-eyewear/Header.vue";
import Slideshow from "../components/demo-eyewear/Slideshow.vue";
import Promos from "../components/demo-eyewear/Promos.vue";
import Portfolio from "../components/demo-eyewear/Portfolio.vue";
import Footer from "../components/demo-eyewear/Footer.vue";
</script>

<template>
	<div>
		<Header />
		<main class="main-eyewear">
			<section class="wrapper eyewear-grid">
				<Slideshow
					class="eyewear-carousel"
					slidesHeight="32rem"
					imageURL="eyewear-hero-1.jpg"
					slideTitle="Infinite looks"
					slideSubTitle="Amazing Sunglasses At just <strong>$99</strong>"
					buttonText="Shop Now!"
					buttonLink="https://wwape.com/"
					:controllersIsInside="false"
				/>
				<Promos />
				<Portfolio />
				<Footer />
			</section>
		</main>
	</div>
</template>

<style lang="scss">
.main-eyewear {
	height: calc(100vh - (var(--main-links-height) + var(--header-height)));
}
.eyewear-grid {
	display: grid;
	grid-template-areas: "eyewear_carousel" "eyewear_promo" "eyewear_portfolio" "eyewear_footer";
	grid-template-rows: auto;
}
.eyewear-carousel {
	grid-area: eyewear_carousel;
}
.promo {
	grid-area: eyewear_promo;
	@include content-spacing;
	padding-block-end: 2rem;
}
.portfolio {
	grid-area: eyewear_portfolio;
}

.footer {
	grid-area: eyewear_footer;
}
</style>
