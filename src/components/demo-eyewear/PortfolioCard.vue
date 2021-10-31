<template>
	<a class="item" :href="cardLinkTo">
		<div class="image" :style="`background-image: url(` + cardImage + `);`"></div>
		<div class="card-content">
			<h3 class="title">{{ cardTitle }}</h3>
			<h4 class="price">
				${{ cardPrice }}
				<span v-if="isDiscount" class="price-details" id="if-price-drop">
					<span class="price-before">${{ cardPriceBefore }}</span> •
					<span class="price-off">{{ cardDiscount }}% off</span>
				</span>
			</h4>
		</div>
	</a>
</template>

<script>
export default {
	name: "PortfolioCard",
	props: {
		cardLinkTo: { type: String },
		cardImage: { type: String },
		cardTitle: { type: String },
		cardPrice: { type: Number },
		isDiscount: { type: Boolean, default: false },
		cardPriceBefore: { type: Number },
		cardDiscount: { type: Number },
	},
};
</script>

<style lang="scss" scoped>
.item {
	text-align: center;
}
.main-title {
	grid-column: 1 / 5;
	@media screen and (max-width: $screen-sm) {
		grid-column: 1 / 3;
	}
	font-size: $font-size-6-Xlarge;
	text-align: center;
	text-transform: uppercase;
	margin-top: 1rem;
}
.image {
	height: 12rem;
	border-radius: $border-radius;
	overflow: hidden;
	@include clickable-image-base;
	background-size: cover;
}
.card-content {
	font-size: $font-size-4-bigger;
	color: $color-system-1-full;
	margin-block-start: 1rem;
}
.title {
	color: $color-system-1-full;
	text-transform: capitalize;
	margin-bottom: 0.25rem;
	opacity: 0.9;
}
.price {
	margin-top: 0.5rem;
	font-weight: $font-weight--bolder;
	letter-spacing: 0.075em;
	font-style: italic;
	span {
		letter-spacing: normal;
		font-family: $font-family--body;
		margin-top: 0.5rem;
		font-weight: $font-weight--normal;
	}
}
.price-details {
	display: block;
	opacity: 0.8;
	font-size: $font-size-1-small;
}
.price-before {
	text-decoration: line-through;
	opacity: 0.8;
	color: $color-caution;
}
</style>
