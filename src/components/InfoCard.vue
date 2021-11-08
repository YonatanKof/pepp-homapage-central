<template>
	<div class="info-card">
		<div class="info-card__body">
			<p>{{ InfoCardKey }}</p>
			<h4 id="credit-line" class="body-sm f-weight-bold">{{ InfoCardValue }}</h4>
		</div>
		<img class="info-card__image" :src="InfoCardImage" />
	</div>
</template>

<script>
export default {
	name: "InfoCard",
	props: ["InfoCardKey", "InfoCardValue", "InfoCardImage"],
};
</script>

<style lang="scss">
.info-card {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.06);
	color: $color-primary;
	border-radius: $border-radius;
	padding: 1rem;
	align-items: center;
	&__body {
		display: flex;
		gap: 0.125rem;
		flex-direction: column;
	}
	&__image {
		color: black;
		padding-top: 4px;
		padding-right: 0px;
		padding-bottom: 4px;
		width: 48px;
		opacity: 85%;
	}
	#balance-line {
		color: rgb(230, 38, 0);
	}
}
</style>
