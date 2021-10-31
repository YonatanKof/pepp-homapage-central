<template>
	<div
		class="item"
		:onclick="`parent.open('` + cardOnClickTo + `')`"
		:style="`background-image: url('` + cardImageURL + `');`"
	>
		<h3 class="overlay">{{ cardTitle }}</h3>
	</div>
</template>

<script>
export default {
	name: "Category",
	props: {
		cardOnClickTo: { default: "https://wwape.com/", type: String },
		cardImageURL: { default: "/placeholder-pepp.jpg", type: String },
		cardTitle: { default: "Nice Title", type: String },
	},
};
</script>

<style lang="scss" scoped>
.item {
	font-weight: bold;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	aspect-ratio: 4 / 3;
	border-radius: $border-radius;
	box-shadow: $shadow-box;
	overflow: hidden;
	transition: box-shadow ease-in-out 0.35s;
	&:hover {
		box-shadow: $shadow-box-hover;
	}
}
.overlay {
	position: relative;
	line-height: $box-height-overlay;
	color: white;
	padding: 0 16px;
	background: $color-primary;
	border-radius: 0 0 4px 0;
	width: max-content;
}
</style>
