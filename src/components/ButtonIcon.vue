<template>
	<button class="button-weak-invert button-just-icon">
		<IconSystem>
			<slot />
		</IconSystem>
	</button>
</template>

<script>
import IconSystem from "./BaseIconSystem.vue";
import IconMenu from "./icons/IconMenu.vue"
export default {
	name: "Button",
	components : {
		IconSystem,
		IconMenu
	}
};
</script>
