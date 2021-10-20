<template>
	<header class="wrapper header eyewear-header">
		<div class="header-start">
			<router-link class="logo" to="/eyewear-demo">
				<img src="../../assets/logo-myBrand.svg" />
			</router-link>
		
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
.eyewear-header {
	background: $color-system-1-full;
	box-shadow: $shadow-box;
}
</style>
