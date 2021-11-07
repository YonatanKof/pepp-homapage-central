<template>
	<div
		class="card-item"
		:onclick="`parent.open('` + cardOnClickTo + `')`"
		:style="`background-image: url('` + cardImageURL + `');`"
	>
		<h3 class="title-sm" :class="overlayType">{{ cardTitle }}</h3>
	</div>
</template>

<script>
export default {
	name: "Category",
	props: {
		cardOnClickTo: { default: "https://wwape.com/", type: String },
		cardImageURL: { default: "/placeholder-pepp.jpg", type: String },
		cardTitle: { default: "Nice Title", type: String },
		overlayType: { default: "overlay-i", type: String },
	},
};
</script>

<style lang="scss">
$title-height: 2.5rem;
.card-item {
	--item-height: 12rem;
	font-weight: bold;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: var(--item-height);
	border-radius: $border-radius;
	box-shadow: $shadow-box;
	overflow: hidden;
	transition: box-shadow ease-in-out 0.35s;
	&:hover {
		box-shadow: $shadow-box-hover;
	}
	@media screen and (max-width: $screen-xl) {
		--item-height: 10rem;
	}
	@media screen and (max-width: $screen-lg) {
		--item-height: 8rem;
	}
	.overlay-i {
		position: relative;
		line-height: $box-height-overlay;
		padding: 0 16px;
		background-color: $color-primary;
		border-radius: 0 0 4px 0;
		width: max-content;
	}
	.overlay-ii {
		line-height: $title-height;
		top: calc(var(--item-height) - #{$title-height});
		background: white;
		position: relative;
		width: 100%;
		text-align: center;
		border-radius: 0 0 4px 4px;
		color: $color-system-1-full;
	}
}
</style>
