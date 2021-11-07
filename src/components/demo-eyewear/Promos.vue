<script setup>
import Card from "./PromoCard.vue";
</script>
<template>
	<div class="promo">
		<Card
			buttonOnClick="newCart('Trends');"
			cardImageURL="http://storage.pepperi.com/Eyewear/image15.jpg"
			cardTitle="Fashion trends"
		/>
		<Card
			buttonOnClick="newCart('Newarrivals');"
			cardImageURL="http://storage.pepperi.com/Eyewear/image16.jpg"
			cardTitle="New arrivals"
		/>
		<Card
			buttonOnClick="newCart('Bestsellers');"
			cardImageURL="http://storage.pepperi.com/Eyewear/image17.jpg"
			cardTitle="Best sellers"
		/>
	</div>
</template>

<style lang="scss">
.promo {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	@media screen and (max-width: $screen-sm) {
		grid-template-columns: 1fr;
	}
	// margin-bottom: 1rem;
	@include content-gap;
}
</style>
