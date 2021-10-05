<template>
	<button class="button-weak-invert button-icon">
		<IconSystem>
			<slot />
		</IconSystem>
	</button>
</template>

<script>
import IconSystem from "./IconSystem.vue";
import IconMenu from "./icons/IconMenu.vue"
export default {
	name: "Button",
	components : {
		IconSystem,
		IconMenu
	}
};
</script>
