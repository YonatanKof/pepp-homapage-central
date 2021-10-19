<template>
	<div id="links-dd" class="dropdown">
		<ButtonIcon class="hidden-on-web" v-click-outside="hideLinksMenu" @click="isShowHeaderLinks = !isShowHeaderLinks">
			<IconMenu />
		</ButtonIcon>
		<div v-if="isShowHeaderLinks" class="dropdown-content-end" id="menuDropdown">
			<ul>
				<li onclick="customHeader.changePassword()">Wish List</li>
				<li onclick="customHeader.logout();">Returns</li>
				<li onclick="customHeader.changePassword()">Line Sheet</li>
				<li onclick="customHeader.logout();">History</li>
				<li onclick="customHeader.tryAndBuy();">Try & Buy</li>
				<li onclick="customHeader.contactUs();">Contact Us</li>
				<div when="links on header-start side are hidden">
					<hr />
					<li onclick="customHeader.newCart('OpticalFrames');">Optical Frames</li>
					<li onclick="customHeader.newCart('Lenses');">Lenses</li>
					<li onclick="customHeader.newCart('Sunglasses');">Sunglasses</li>
					<li onclick="customHeader.newCart('Accessories');">Accessories</li>
					<li onclick="customHeader.newCart('SpareParts');">Spare Parts</li>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
import ButtonIcon from "./ButtonIcon.vue";
import IconMenu from "./icons/IconMenu.vue";

export default {
	name: "ToggleDiv",
	components: {
		ButtonIcon,
		IconMenu,
	},
	directives: {
		clickOutside: vClickOutside.directive,
	},
	data() {
		return {
			isShowHeaderLinks: false,
		};
	},
	props: {
		msg: String,
	},
	methods: {
		hideLinksMenu() {
			this.isShowHeaderLinks = false;
		},
		onClickOutside(event) {
			return this.hideLinksMenu(event);
		},
	},
};
</script>
