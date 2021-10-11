<template>
	<footer class="footer">MyBrand &#169; {{ $data.year }}</footer>
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss">
.footer {
	font-family: $font-family--title;
	font-style: italic;
	text-align: center;
	margin-top: 2rem;
	padding: 2rem 0;
	opacity: 0.8;
	background-color: $color-system-4-weak;
}
</style>
