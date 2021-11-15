<script setup>
import SVGBase from "../components/BaseSVG.vue";
import FullLeaf from "../components/brand/BrandLeafFull.vue";
import RoundLeaf from "../components/brand/BrandLeafRound.vue";
import SkinyLeaf from "../components/brand/BrandLeafSkiny.vue";
import Logo from "../components/brand/BrandLogoFull.vue";
</script>

<template>
	<section>
		<div class="nice-content">
			<SVGBase>
				<Logo />
			</SVGBase>
			<h1 class="title-3xl color-system">Pepperi's Homepage Central</h1>
			<h2 class="body-lg">Click the links above to see our designs in action</h2>
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
				<FullLeaf :svgFill="'var(--color-primary-main)'" :svgOpacity="'1'" class="leaf leaf-full" />
			</SVGBase>
		</div>
	</section>
</template>

<style lang="scss" scoped>
section {
	top: var(--main-links-height);
	background-color: $color-system-4-weak;
	.nice-content {
		position: relative;
		z-index: 10000;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2rem;
		@include content-spacing;
		svg {
			width: 24rem;
			height: 100%;
		}
		@media screen and (max-width: $screen-xl) {
			svg {
				width: 20rem;
			}
		}
		@media screen and (max-width: $screen-lg) {
			svg {
				width: 20rem;
			}
		}
		@media screen and (max-width: $screen-md) {
			svg {
				width: 16rem;
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

.leaf {
	position: absolute;
	inset: unset;
	transition: inset ease-out 4s, transform ease-out 2s;
}
.leaf-full {
	right: -1rem;
	bottom: -18rem;
	transform: rotateZ(-35deg) scale(1);
	@media screen and (max-width: $screen-lg) {
		right: -2rem;
		bottom: -19rem;
		transform: rotateZ(-30deg) scale(0.9);
	}
	@media screen and (max-width: $screen-md) {
		right: -3rem;
		bottom: -20rem;
		transform: rotateZ(-25deg) scale(0.8);
	}
	@media screen and (max-width: $screen-sm) {
		right: -4rem;
		bottom: -21rem;
		transform: rotateZ(-20deg) scale(0.7);
	}
}
.leaf-round {
	left: -6rem;
	top: -2rem;
	transform: rotateZ(-25deg) scale(1.3);
	animation-delay: 2s;
	@media screen and (max-width: $screen-lg) {
		left: -7rem;
		top: -2.5rem;
		transform: rotateZ(-20deg) scale(1.2);
	}
	@media screen and (max-width: $screen-md) {
		left: -8rem;
		top: -3rem;
		transform: rotateZ(-15deg) scale(1);
	}
	@media screen and (max-width: $screen-sm) {
		top: -3.5rem;
		left: -9rem;
		transform: rotateZ(-10deg) scale(0.8);
	}
}
.leaf-skiny {
	left: -6rem;
	bottom: -8rem;
	transform: rotateZ(45deg) scale(1.2);
	animation-delay: 4s;
	@media screen and (max-width: $screen-lg) {
		left: -9rem;
		transform: rotateZ(40deg) scale(1.1);
	}
	@media screen and (max-width: $screen-md) {
		left: -10rem;
		transform: rotateZ(35deg) scale(1);
	}
	@media screen and (max-width: $screen-sm) {
		left: -11rem;
		transform: rotateZ(30deg) scale(0.9);
	}
}
.leaf-skiny-alt {
	right: -6rem;
	top: -8rem;
	transform: rotateZ(-150deg) rotateY(-180deg) skew(10deg, 5deg) scale(1.2);
	animation-delay: 6s;
	@media screen and (max-width: $screen-lg) {
		right: -7rem;
		top: -9rem;
		transform: rotateZ(-160deg) rotateY(-180deg) skew(10deg, 5deg) scale(1);
	}
	@media screen and (max-width: $screen-md) {
		right: -8rem;
		top: -10rem;
		transform: rotateZ(-170deg) rotateY(-180deg) skew(10deg, 5deg) scale(0.8);
	}
	@media screen and (max-width: $screen-sm) {
		right: -9rem;
		top: -12rem;
		transform: rotateZ(-180deg) rotateY(-180deg) skew(10deg, 5deg) scale(0.6);
	}
}
</style>
