<template>
	<div class="option">
		<p id="list1">{{ Title }}</p>
		<button id="add" :onclick="clickTo"></button>
	</div>
</template>
<script>
export default {
	name: "Option",
	props: ["Title", "clickTo"],
};
</script>
<style lang="scss">
.option {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
#add {
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 0.25rem;
	fill: black;
	background-color: rgba(0, 0, 0, 0.06);
	background-image: url("https://storage.pepperi.com/PreSales/NewFoodDemoImg/Icon-plus.svg");
	background-size: 0.75rem;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
