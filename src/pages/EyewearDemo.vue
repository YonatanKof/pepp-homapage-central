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
		<main class="wrapper content eyewear-grid">
			<Slideshow
				class="eyewear-carousel"
				imageURL="eyewear-hero-1.jpg"
				slideTitle="Infinite looks"
				slideSubTitle="Amazing Sunglasses At just <strong>$99</strong>"
				buttonText="Shop Now!"
				buttonLink="https://wwape.com/"
			/>
			<Promos />
			<Portfolio />
			<Footer />
		</main>
	</div>
</template>

<style lang="scss">
.eyewear-grid {
	grid-template-areas: "eyewear_carousel" "eyewear_promo" "eyewear_portfolio" "eyewear_footer";
}
.eyewear-carousel {
	grid-area: eyewear_carousel;
}
.promo {
	grid-area: eyewear_promo;
	@include content-spacing;
}
.portfolio {
	grid-area: eyewear_portfolio;
}

.footer {
	grid-area: eyewear_footer;
}
</style>
