<template>
	<a class="item" :onclick="buttonOnClick" :style="`background-image: url(` + cardImageURL + `)`">
		<div class="content">
			<h3 class="title">{{ cardTitle }}</h3>
		</div>
	</a>
</template>

<script>
export default {
	name: "PromoCard",
	props: ["buttonOnClick", "cardImageURL", "cardTitle"],
};
</script>
<style lang="scss" scoped>
.item {
    aspect-ratio: 3/4;
	@media screen and (max-width: $screen-sm) {
        aspect-ratio: 2/1;
	}
	border-radius: $border-radius;
	overflow: hidden;
	background-size: cover;
	@include clickable-image-base;
}
.title {
	font-weight: $font-weight--bold;
	font-size: var(--font-size-06);
	color: $color-system-invert-1-full;
	text-transform: capitalize;
	@media screen and (max-width: $screen-md) {
		font-size: var(--font-size-05);
	}
	@media screen and (max-width: $screen-sm) {
		font-size: var(--font-size-06);
	}
}
.content {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	@include linear-gradient(180deg, black, 0.8, 50%);
	padding: 1rem;
	display: flex;
}
</style>
