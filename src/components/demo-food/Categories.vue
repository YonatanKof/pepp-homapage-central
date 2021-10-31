<template>
	<div id="categories">
		<div class="boxes-promotions">
			<Promotion
				cardTitle="Old Arrivals"
				cardOnClickTo="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Pet%20Food%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				cardImageURL="/FoodDemo/Filter-New Arrivals.jpg"
			/>
			<Promotion
				cardTitle="Best Sellers"
				cardOnClickTo="https://www.ynet.co.il/"
				cardImageURL="/FoodDemo/Filter-Best Sellers.jpg"
			/>
		</div>
		<div class="boxes-categories">
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Fruits%20%26%20Vegetables%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Fruits.jpg)"
			>
				<div class="overlay">Fruits</div>
			</div>
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Beverages%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Soft-Drinks.jpg)"
			>
				<div class="overlay">Soft Drinks</div>
			</div>
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Fruits%20%26%20Vegetables%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Vegetables.jpg)"
			>
				<div class="overlay">Vegetables</div>
			</div>
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Snacks%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Candies.jpg)"
			>
				<div class="overlay">Candy land</div>
			</div>
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Dairy%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Dairy.jpg)"
			>
				<div class="overlay">Dairy</div>
			</div>
			<div
				class="item"
				onclick="customHomepage.setUUIDandNav('/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.MainCategory%5C%22,%5C%22Value%5C%22:%5C%22Grains%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%224cb18aba-1986-43a0-a5d1-f53433c6a589%5C%5C%5C%22%7D%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false')"
				style="background-image: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/Ingerdeants.jpg)"
			>
				<div class="overlay">Dry Ingerdeans</div>
			</div>
		</div>
	</div>
</template>
<script>
import Promotion from "./CardTypeI.vue";
export default {
	name: "Categories",
	components: { Promotion },
};
</script>

<style lang="scss">
#categories {
	display: grid;
	grid-template-areas: "boxes-promotions boxes-categories";
	grid-template-columns: 1fr 2fr;
	grid-gap: 1rem;
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
