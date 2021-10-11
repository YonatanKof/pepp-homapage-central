<template>
	<div class="portfolio">
		<h2 class="portfolio__main-title">Best Sellers</h2>

		<a
			class="portfolio__item"
			href="https://app.pepperi.com/transactions/item_details/1708634d9b2041069f6992935ade2eb2/e95bc00c-0d74-4410-918c-d006f0126c47?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22NewWave%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.Prop2%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22Women%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D"
		>
			<div class="portfolio__image" style="background-image: url(http://storage.pepperi.com/Eyewear/image18.jpg)"></div>
			<div class="portfolio__content">
				<h3 class="portfolio__title">Muzza X Classic</h3>
				<h4 class="portfolio__price">
					$109.80
					<span class="portfolio__price-details" id="if-price-drop">
						<span class="portfolio__price-before">$122.00</span> •
						<span class="portfolio__price-off">10% off</span>
					</span>
				</h4>
			</div>
		</a>

		<a
			class="portfolio__item"
			href="https://app.pepperi.com/transactions/item_details/1708634d9b2041069f6992935ade2eb2/e95bc00c-0d74-4410-918c-d006f0126c47?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22NewWave%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.Prop2%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22Women%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D"
		>
			<div class="portfolio__image" style="background-image: url(http://storage.pepperi.com/Eyewear/image19.jpg)"></div>
			<div class="portfolio__content">
				<h3 class="portfolio__title">Ottoman Red Tortoise</h3>
				<h4 class="portfolio__price">$99.00</h4>
			</div>
		</a>

		<a
			class="portfolio__item"
			href="https://app.pepperi.com/transactions/item_details/1708634d9b2041069f6992935ade2eb2/e95bc00c-0d74-4410-918c-d006f0126c47?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22NewWave%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.Prop2%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22Women%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D"
		>
			<div class="portfolio__image" style="background-image: url(http://storage.pepperi.com/Eyewear/image20.jpg)"></div>
			<div class="portfolio__content">
				<h3 class="portfolio__title">Kof Tov Classic</h3>
				<h4 class="portfolio__price">
					$70.40
					<span class="portfolio__price-details" id="if-price-drop">
						<span class="portfolio__price-before">$88.00</span> •
						<span class="portfolio__price-off">20% off</span>
					</span>
				</h4>
			</div>
		</a>

		<a
			class="portfolio__item"
			href="https://app.pepperi.com/transactions/item_details/1708634d9b2041069f6992935ade2eb2/e95bc00c-0d74-4410-918c-d006f0126c47?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22NewWave%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.Prop2%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22Women%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D"
		>
			<div class="portfolio__image" style="background-image: url(http://storage.pepperi.com/Eyewear/image21.jpg)"></div>
			<div class="portfolio__content">
				<h3 class="portfolio__title">Ray Approve Classic Circle</h3>
				<h4 class="portfolio__price">
					$108.80
					<span class="portfolio__price-details" id="if-price-drop">
						<span class="portfolio__price-before">$128.00</span> •
						<span class="portfolio__price-off">15% off</span>
					</span>
				</h4>
			</div>
		</a>
	</div>
</template>

<style lang="scss">
.portfolio {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	@media screen and (max-width: $screen-sm) {
		grid-template-columns: repeat(2, 1fr);
	}
	@include content-spacing;
	@include content-gap;
	&__item {
		text-align: center;
	}
	&__main-title {
		grid-column: 1 / 5;
		@media screen and (max-width: $screen-sm) {
			grid-column: 1 / 3;
		}
		font-size: $font-size-6-Xlarge;
		text-align: center;
		text-transform: uppercase;
		margin-top: 1rem;
	}
	&__image {
		height: 12rem;
		border-radius: $border-radius;
		overflow: hidden;
		@include clickable-image-base;
		background-size: cover;
	}
	&__content {
		font-size: $font-size-4-bigger;
		color: $color-system-1-full;
		margin-block-start: 1rem;
	}
	&__title {
		color: $color-system-1-full;
		text-transform: capitalize;
		margin-bottom: 0.25rem;
		opacity: 0.9;
	}
	&__price {
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
	&__price-details {
		display: block;
		opacity: 0.8;
		font-size: $font-size-1-small;
	}
	&__price-before {
		text-decoration: line-through;
		opacity: 0.8;
		color: $color-caution;
	}
}
</style>
