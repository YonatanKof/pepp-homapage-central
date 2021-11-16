<script setup>
import DropdownLinks from "../DropdownLinks.vue";
import DropdownUser from "../DropdownUser.vue";
</script>

<template>
	<header class="food-header">
		<div class="wrapper header max-w">
			<div class="header-start">
				<router-link to="/food-demo">
					<img class="logo" src="/FoodDemo/Foodies.svg" />
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
	position: sticky;
	top: 0;
	z-index: 1000;
	.max-w {
		max-width: $screen-3xl;
	}
	.logo{
		height: 2.5rem;
	}
}
</style>
