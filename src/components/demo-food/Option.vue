<template>
	<div class="option">
		<p>{{ Title }}</p>
		<button class="button-weak button-just-icon" title="button-md" :onclick="clickTo">
			<IconSystem>
				<PlusIcon />
			</IconSystem>
		</button>
	</div>
</template>

<script>
import IconSystem from "../BaseIconSystem.vue";
import PlusIcon from "../icons/IconPlus.vue";
export default {
	name: "Option",
	props: ["Title", "clickTo"],
	components: { IconSystem, PlusIcon },
};
</script>

<style lang="scss">
.option {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
</style>
