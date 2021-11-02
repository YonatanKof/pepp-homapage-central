<template>
	<div id="categories">
		<div class="boxes-promotions">
			<Card
				cardTitle="Old Arrivals"
				cardOnClickTo="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Pet%20Food%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				cardImageURL="/FoodDemo/Filter-New Arrivals.jpg"
			/>
			<Card
				cardTitle="Best Sellers"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Filter-Best Sellers.jpg"
			/>
		</div>
		<div class="boxes-categories">
			<Card
				cardTitle="Fruits"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Fruits.jpg"
				overlayType="overlay-ii"
			/>
			<Card
				cardTitle="Soft Drinks"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Soft Drinks.jpg"
				overlayType="overlay-ii"
			/>
			<Card
				cardTitle="Vegetables"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Vegetables.jpg"
				overlayType="overlay-ii"
			/>
			<Card
				cardTitle="Candy Land"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Candies.jpg"
				overlayType="overlay-ii"
			/>
			<Card
				cardTitle="Dairy"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Dairy.jpg"
				overlayType="overlay-ii"
			/>
			<Card
				cardTitle="Dry Ingredients"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Category-Dry Ingerdeants.jpg"
				overlayType="overlay-ii"
			/>
		</div>
	</div>
</template>
<script>
import Card from "./Card.vue";
export default {
	name: "Categories",
	components: { Card },
};
</script>

<style lang="scss">
#categories {
	display: grid;
	grid-template-areas: "boxes-promotions boxes-categories";
	grid-template-columns: 1fr 2fr;
	grid-gap: 1rem;
	height: max-content;
	@media screen and (max-width: $screen-md) {
		padding: 1.5rem;
		grid-template-areas: "boxes-categories" "boxes-promotions";
		grid-template-columns: 1fr;
	}
}

.boxes-promotions {
	display: grid;
	grid-area: boxes-promotions;
	grid-template-columns: 1fr;
	gap: 1rem;
	@media screen and (max-width: $screen-md) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: $screen-sm) {
		grid-template-columns: 1fr;
	}
}

.boxes-categories {
	display: grid;
	gap: 1rem;
	grid-area: boxes-categories;
	grid-template-columns: 1fr 1fr 1fr;
	@media screen and (max-width: $screen-sm) {
		grid-template-columns: 1fr 1fr;
	}
}
</style>
