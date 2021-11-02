<template>
	<section id="carousel" class="carousel">
		<div id="slides" class="slides" :class="{ 'carousel-rounded': carouselRounded, 'carousel-shadow': carouselShadow  }" :style="`height:` + slidesHeight + `;`">
			<div class="slide" data-state="active" :style="`background-image: url(` + imageURL + `); display: block;`">
				<div class="gard-overlay">
					<button v-if="showButtons" id="prev-btn" class="button-weak-invert button-icon hidden-on-mobile" onclick="minusSlide()">
						<IconSystem>
							<ArrowLeftAlt />
						</IconSystem>
					</button>
					<div class="slide-text">
						<h1 class="title">{{ slideTitle }}</h1>
						<p class="subtitle" v-html="slideSubTitle"></p>
						<button :onclick="`parent.open('` + buttonLink + `')`" class="button-strong-invert body-md bolder">
							{{ buttonText }}
						</button>
					</div>
					<button v-if="showButtons" id="next-btn" class="button-weak-invert button-icon hidden-on-mobile" onclick="plusSlide()">
						<IconSystem>
							<ArrowRightAlt />
						</IconSystem>
					</button>
				</div>
			</div>
		</div>
		<SlideControllers />
	</section>
</template>

<script>
import SlideControllers from "../SlideControllers.vue";
import IconSystem from "../IconSystem.vue";
import ArrowLeftAlt from "../icons/IconArrowLeftAlt.vue";
import ArrowRightAlt from "../icons/IconArrowRightAlt.vue";

export default {
	name: "Slideshow",
	components: {
		SlideControllers,
		IconSystem,
		ArrowLeftAlt,
		ArrowRightAlt,
	},
	props: {
		slidesHeight: {
			type: String,
			default: "100%",
		},
		imageURL: { type: String },
		slideTitle: { type: String },
		slideSubTitle: { type: String },
		buttonText: { type: String },
		buttonLink: { type: String },
		showButtons: { type: Boolean, default: true },
		carouselRounded: { type: Boolean, default: false },
		carouselShadow: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss">
.carousel {
	width: 100%;
	cursor: pointer;
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.carousel-rounded {
	border-radius: $border-radius;
	overflow: hidden;
}
.carousel-shadow {
	box-shadow: $shadow-box;
}

.slides {
	background-color: $color-system-3-dim;
	position: relative;
	width: 100%;
}

.slide {
	position: absolute;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: opacity 1000ms;
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	.gard-overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		@include linear-gradient(90deg, black, 0.6, 80%);
		// @include content-spacing;
		@media screen and (max-width: $screen-md) {
			align-items: flex-end;
			padding-bottom: 1.5rem;
			@include linear-gradient(45deg, black, 0.6, 80%);
		}
		.slide-text {
			width: 100%;
			text-align: left;
			color: white;
			padding: 0 2rem;
			@media screen and (max-width: $screen-md) {
				padding: 0 1rem;
			}
			#shop_now {
				font-size: var(--font-size-01);
				font-weight: $font-weight--normal;
				color: $color-system-invert-1-full;
				padding: 0.4em 0.6em;
				border-radius: $border-radius;
				background: $color-system-1-full;
				margin-bottom: 0.25rem;
				max-width: max-content;
			}
			.title {
				font-family: $font-family--title;
				font-weight: $font-weight--bold;
				font-size: var(--font-size-08);
				margin-bottom: 0.5rem;
			}
			.subtitle {
				font-size: var(--font-size-04);
				margin-bottom: 1rem;
			}
			.desc {
				font-size: var(--font-size-03);
				margin-bottom: 1.5rem;
			}
		}
	}
}

.slide:nth-child(1) {
	opacity: 1;
}

.slide-text:nth-child(1) {
	opacity: 1;
}

.slide[data-state="active"] {
	display: block;
}
#prev-btn{
	margin-inline-start: 1.5rem;
}
#next-btn{
	margin-inline-end: 1.5rem;
}
</style>
