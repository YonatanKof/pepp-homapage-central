<script setup>
import DropdownLinks from "../DropdownLinks.vue";
import DropdownUser from "../DropdownUser.vue";
</script>

<template>
	<header class="food-header">
		<div class="wrapper header max-w">
			<div class="header-start">
				<router-link class="logo" to="/food-demo">
					<img src="FoodDemo/Foodies.svg" />
				</router-link>
			</div>
			<div class="header-end">
				<DropdownUser />
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
$food-color-main: rgb(48, 37, 29);
.food-header {
	background-color: $food-color-main;
	box-shadow: $shadow-box-hard;
	.max-w {
		max-width: $screen-2xl;
	}
}
</style>
