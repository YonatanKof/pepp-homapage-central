<template>
	<header class="wrapper header">
		<div class="header-start">
			<a id="logo" class="logo" href="/HomePage">
				<img src="https://pepperihomepage.github.io/Public/eyewear/assets/logo-myBrand.svg" />
			</a>
			<div class="links hidden-on-tablet">
				<a class="link" onclick="customHeader.newCart('OpticalFrames');">Optical Frames</a>
				<a class="link" onclick="customHeader.newCart('Lenses');">Lenses</a>
				<a class="link" onclick="customHeader.newCart('Sunglasses');">Sunglasses</a>
				<a class="link" onclick="customHeader.newCart('Accessories');">Accessories</a>
				<a class="link" onclick="customHeader.newCart('SpareParts');">Spare Parts</a>
			</div>
		</div>
		<div class="header-end">
			<DropdownLinks />
			<DropdownUser />
		</div>
	</header>
</template>

<script>
import DropdownLinks from "../DropdownLinks.vue";
import DropdownUser from "../DropdownUser.vue";

export default {
	name: "ToggleDiv",
	components: {
		DropdownLinks,
		DropdownUser,
	},
};
</script>

<style lang="scss">
.header {
	@include content-spacing;
	height: max-content;
	display: flex;
	justify-content: space-between;
	max-width: 100%;
	display: flex;
	align-items: center;
	background: $color-system-1-full;
	box-shadow: $shadow-box;
	height: $header-height;
	z-index: 9999;
	position: sticky;
	top: 0;
}

.logo {
	max-height: 2.5rem;
	margin-inline-end: 1rem;
}

.header-start,
.header-end {
	display: flex;
	align-items: center;
}
.header-start {
	.links {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
	.link {
		color: $color-system-invert-2-dimmed;
		font-size: $font-size-2-regular;
		font-weight: 600;
		// margin-inline-end: 1rem;
		transition: color ease-in-out 0.25s;
		&:hover {
			color: $color-system-invert-1-full;
		}
	}
}
.header-end {
	button {
		margin-inline-start: 0.5rem;
	}
}
.expand-button {
	display: none;
}
</style>
