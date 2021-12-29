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
			<div>
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
	@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
		align-items: flex-start;
	}
	.intro-text {
		position: absolute;
		z-index: 100000;
		top: 2.5rem;
		left: 1.5rem;
		rotate: -2deg;
		background-color: var(--color-primary-super-light);
		box-shadow: 0.2em 0.2em 0 var(--color-primary-extra-dark);
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
		@media screen and (max-width: $screen-xl), screen and (max-height: 750px) {
			svg {
				width: 24rem;
			}
		}
		@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
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
	background-image: radial-gradient(var(--color-system-00) 20%, var(--color-primary-extra-light));
	div {
		background-image: url("/map.svg");
		height: 100%;
		opacity: 0.9;
	}
}
@keyframes leaf-anim-1 {
	from {
		translate: 0% 0%;
	}
	to {
		translate: 6% 3%;
		rotate: -8deg;
	}
}
@keyframes leaf-anim-2 {
	from {
		translate: 0% 0%;
	}
	50% {
		translate: -6% -3%;
		rotate: 8deg;
	}
	to {
		translate: 0% 0%;
	}
}
.leaf {
	position: absolute;
	inset: unset;
	transition: inset ease-out 4s, transform ease-out 2s;
}
.leaf-full {
	right: -1rem;
	bottom: -18rem;
	transform: rotateZ(-50deg) scale(1);
	animation: leaf-anim-1 24000ms cubic-bezier(0.35, 0, 0.75, 1) alternate infinite;
	@media screen and (max-width: $screen-xl), screen and (max-height: 750px) {
		transform: rotateZ(-40deg) scale(0.9);
	}
	@media screen and (max-width: $screen-lg), screen and (max-height: 700px) {
		right: -2rem;
		bottom: -19rem;
		transform: rotateZ(-30deg) scale(0.8);
	}
	@media screen and (max-width: $screen-md), screen and (max-height: 650px) {
		right: -5rem;
		bottom: -20rem;
		transform: rotateZ(-25deg) scale(0.7);
	}
	@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
		right: -9rem;
		bottom: -23rem;
		transform: rotateZ(-20deg) scale(0.6);
	}
	@media screen and (max-width: $screen-xs) {
		right: -9rem;
		bottom: -26rem;
		transform: rotate(-20deg) scale(0.45);
	}
}
.leaf-round {
	left: -6rem;
	top: -2rem;
	animation: leaf-anim-1 16000ms ease-in alternate infinite;
	transform: rotateZ(-20deg) scale(1.3) skew(5deg, 5deg);
	@media screen and (max-width: $screen-3xl) {
		transform: rotateZ(-25deg) scale(1.2) skew(5deg, 5deg);
	}
	@media screen and (max-width: $screen-2xl), screen and (max-height: 800px) {
		transform: rotateZ(-25deg) scale(1.1) skew(5deg, 5deg);
	}
	@media screen and (max-width: $screen-xl), screen and (max-height: 750px) {
		transform: rotateZ(-25deg) scale(1) skew(5deg, 5deg);
	}
	@media screen and (max-width: $screen-lg), screen and (max-height: 700px) {
		left: -7rem;
		top: -2.5rem;
		transform: rotateZ(-20deg) scale(0.9) skew(2deg, 2deg);
	}
	@media screen and (max-width: $screen-md), screen and (max-height: 650px) {
		left: -8rem;
		top: -3rem;
		transform: rotateZ(-15deg) scale(0.8) skew(5deg, 5deg);
	}
	@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
		top: -7rem;
		left: -13rem;
		transform: rotateZ(-10deg) scale(0.6) skew(1deg, 1deg);
	}
	@media screen and (max-width: $screen-xs) {
		top: -8rem;
		left: -15rem;
		transform: rotateZ(-5deg) scale(0.5) skew(1deg, 1deg);
	}
}
.leaf-skiny {
	left: -6rem;
	bottom: -10rem;
	animation-delay: 2s;
	animation: leaf-anim-2 16000ms ease-in-out alternate infinite;
	transform: rotateZ(55deg) scale(1.1);
	@media screen and (max-width: $screen-2xl), screen and (max-height: 800px) {
		transform: rotateZ(50deg) scale(1);
	}
	@media screen and (max-width: $screen-xl), screen and (max-height: 750px) {
		transform: rotateZ(45deg) scale(0.9);
	}
	@media screen and (max-width: $screen-lg), screen and (max-height: 700px) {
		left: -11rem;
		transform: rotateZ(40deg) scale(0.8);
	}
	@media screen and (max-width: $screen-md), screen and (max-height: 650px) {
		left: -12rem;
		transform: rotateZ(35deg) scale(0.75);
	}
	@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
		left: -11rem;
		bottom: -16rem;
		transform: rotateZ(30deg) scale(0.7);
	}
	@media screen and (max-width: $screen-xs) {
		left: -18rem;
		bottom: -20;
		transform: rotate(30deg) scale(0.5);
	}
}
.leaf-skiny-alt {
	right: -6rem;
	top: -9rem;
	transform: rotateZ(-110deg) skew(10deg, 5deg) scale(1.1);
	animation: leaf-anim-2 24000ms cubic-bezier(0.35, 0, 0.75, 1) alternate infinite;
	@media screen and (max-width: $screen-2xl), screen and (max-height: 800px) {
		transform: rotateZ(-120deg) skew(10deg, 5deg) scale(1);
	}
	@media screen and (max-width: $screen-xl), screen and (max-height: 750px) {
		transform: rotateZ(-130deg) skew(10deg, 5deg) scale(0.9);
	}
	@media screen and (max-width: $screen-lg), screen and (max-height: 700px) {
		right: -7rem;
		top: -10rem;
		transform: rotateZ(-140deg) skew(10deg, 5deg) scale(0.8);
	}
	@media screen and (max-width: $screen-md), screen and (max-height: 650px) {
		right: -10rem;
		top: -11rem;
		transform: rotateZ(-150deg) skew(10deg, 5deg) scale(0.7);
	}
	@media screen and (max-width: $screen-sm), screen and (max-height: 500px) {
		right: -12rem;
		top: -18rem;
		transform: rotateZ(-160deg) skew(10deg, 5deg) scale(0.6);
	}
	@media screen and (max-width: $screen-xs) {
		right: -18rem;
		top: -20rem;
		transform: rotate(-150deg) skew(5deg, 3deg) scale(0.4);
	}
}
</style>
