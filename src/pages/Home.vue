<script setup>
import SVGBase from "../components/BaseSVG.vue";
import FullLeaf from "../components/brand/BrandLeafFull.vue";
import RoundLeaf from "../components/brand/BrandLeafRound.vue";
import SkinyLeaf from "../components/brand/BrandLeafSkiny.vue";
import Logo from "../components/brand/BrandLogoFull.vue";
</script>

<template>
	<section>
		<h2 class="intro-text body-sm f-family-hand">Click here to see our Demos in action</h2>
		<div class="nice-content">
			<SVGBase>
				<Logo />
			</SVGBase>
			<h1 class="title-3xl color-system text-center">Homepage Central</h1>
		</div>
		<div class="nice-bg">
			<SVGBase>
				<SkinyLeaf :svgFill="'var(--color-primary-super-light)'" :svgOpacity="'1'" class="leaf leaf-skiny-alt" />
			</SVGBase>
			<SVGBase>
				<RoundLeaf :svgFill="'var(--color-primary-extra-light)'" :svgOpacity="'1'" class="leaf leaf-round" />
			</SVGBase>
			<SVGBase>
				<SkinyLeaf :svgFill="'var(--color-primary-light)'" :svgOpacity="'1'" class="leaf leaf-skiny" />
			</SVGBase>
			<SVGBase>
				<FullLeaf :svgFill="'var(--color-primary-extra-light)'" :svgOpacity="'1'" class="leaf leaf-full" />
			</SVGBase>
		</div>
	</section>
</template>

<style lang="scss" scoped>
section {
	top: var(--main-links-height);
	background-color: $color-system-4-weak;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: $screen-sm) {
		align-items: flex-start;
	}
	.intro-text {
		position: absolute;
		z-index: 100000;
		top: 2.5rem;
		left: 1.5rem;
		rotate: -2deg;
		background-color: var(--color-primary-super-light);
		box-shadow: 0.1em 0.2em 0 var(--color-primary-main);
		padding: 0 0.5em 0.25em;
	}
	.nice-content {
		align-items: center;
		position: relative;
		z-index: 10000;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2rem;
		margin-bottom: 4rem;
		@include content-spacing;
		svg {
			width: 32rem;
			height: 100%;
		}
		@media screen and (max-width: $screen-xl) {
			svg {
				width: 24rem;
			}
		}
		@media screen and (max-width: $screen-sm) {
			margin-top: 2rem;
			svg {
				width: 20rem;
			}
		}
	}
}
.nice-bg {
	display: block;
	position: fixed;
	inset: 0px;
	background-color: $color-system-4-weak;
}
@keyframes leaf-anim {
	from {
		translate: 0% 0%;
	}
	to {
		translate: 6% 3%;
	}
}
.leaf {
	position: absolute;
	inset: unset;
	transition: inset ease-out 4s, transform ease-out 2s;
	animation: leaf-anim 12000ms cubic-bezier(0.35, 0, 0.75, 1) alternate infinite;
}
.leaf-full {
	right: -1rem;
	bottom: -18rem;
	transform: rotateZ(-50deg) scale(0.8);
	@media screen and (max-width: $screen-lg) {
		right: -2rem;
		bottom: -19rem;
		transform: rotateZ(-30deg) scale(0.7);
	}
	@media screen and (max-width: $screen-md) {
		right: -5rem;
		bottom: -20rem;
		transform: rotateZ(-25deg) scale(0.6);
	}
	@media screen and (max-width: $screen-sm) {
		right: -9rem;
		bottom: -23rem;
		transform: rotateZ(-20deg) scale(0.5);
	}
}
.leaf-round {
	left: -6rem;
	top: -2rem;
	transform: rotateZ(-25deg) scale(1) skew(5deg, 5deg);
	animation-delay: 2s;
	@media screen and (max-width: $screen-lg) {
		left: -7rem;
		top: -2.5rem;
		transform: rotateZ(-20deg) scale(0.9) skew(2deg, 2deg);
	}
	@media screen and (max-width: $screen-md) {
		left: -8rem;
		top: -3rem;
		transform: rotateZ(-15deg) scale(0.8) skew(5deg, 5deg);
	}
	@media screen and (max-width: $screen-sm) {
		top: -7rem;
		left: -13rem;
		transform: rotateZ(-10deg) scale(0.6) skew(1deg, 1deg);
	}
}
.leaf-skiny {
	left: -6rem;
	bottom: -10rem;
	transform: rotateZ(45deg) scale(0.9);
	animation-delay: 4s;
	@media screen and (max-width: $screen-lg) {
		left: -11rem;
		transform: rotateZ(40deg) scale(0.8);
	}
	@media screen and (max-width: $screen-md) {
		left: -12rem;
		transform: rotateZ(35deg) scale(0.75);
	}
	@media screen and (max-width: $screen-sm) {
		left: -11rem;
		bottom: -16rem;
		transform: rotateZ(30deg) scale(0.7);
	}
}
.leaf-skiny-alt {
	right: -6rem;
	top: -9rem;
	transform: rotateZ(-130deg) skew(10deg, 5deg) scale(0.9);
	animation-delay: 6s;
	@media screen and (max-width: $screen-lg) {
		right: -7rem;
		top: -10rem;
		transform: rotateZ(-140deg) skew(10deg, 5deg) scale(0.8);
	}
	@media screen and (max-width: $screen-md) {
		right: -10rem;
		top: -11rem;
		transform: rotateZ(-150deg) skew(10deg, 5deg) scale(0.7);
	}
	@media screen and (max-width: $screen-sm) {
		right: -12rem;
		top: -18rem;
		transform: rotateZ(-160deg) skew(10deg, 5deg) scale(0.6);
	}
}
</style>
