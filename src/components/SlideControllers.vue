<template>
	<div class="slide-controllers">
		<div id="indicators" class="indicators">
			<div class="radio-box">
				<input type="radio" name="radio" checked />
				<span class="radio-dot"></span>
			</div>
			<div class="radio-box">
				<input type="radio" name="radio" />
				<span class="radio-dot"></span>
			</div>
			<div class="radio-box">
				<input type="radio" name="radio" />
				<span class="radio-dot"></span>
			</div>
		</div>
		<button onclick="customHomepage.playerClick();" class="pause button-weak" id="player"></button>
	</div>
</template>

<style lang="scss">
.slide-controllers {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.25rem 0;
	cursor: default;
	button {
		margin-inline-start: 0.5rem;
		background-color: transparent;
		height: 2rem;
		width: 2rem;
		background-position: center;
		background-size: 2rem;
		background-repeat: no-repeat;
		margin: 0;
		border-radius: $border-radius;
		transition: background-color ease-in-out 0.25s;
		&:hover {
			background-color: $color-system-4-weak;
		}
	}
	.pause {
		background-image: url("https://storage.pepperi.com/PreSales/NewFoodDemoImg/pause.svg");
	}
	.play {
		background-image: url("https://storage.pepperi.com/PreSales/NewFoodDemoImg/play.svg");
	}
}

.indicators {
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 3rem;
	padding: 0 1rem;
	position: relative;
	&:active {
		box-shadow: none;
	}
}

$radio-size: 1rem;

.radio-box {
	display: block;
	position: relative;
	cursor: pointer;
	user-select: none;
	height: $radio-size;
	width: $radio-size;
	margin-inline-end: 0.75rem;
	&:last-child {
		margin-inline-end: 0;
	}
	input {
		height: $radio-size;
		width: $radio-size;
		position: absolute;
		opacity: 0;
		cursor: pointer;
		&:checked ~ .radio-dot {
			background-color: $color-system-1-full;
		}
	}
}

.radio-dot {
	position: absolute;
	top: 0;
	left: 0;
	height: $radio-size;
	width: $radio-size;
	background-color: $color-system-3-dim;
	border-radius: 50%;
	transition: background-color ease-in-out 0.25s, box-shadow ease-in-out 0.1s;
	:after {
		content: "";
		position: absolute;
		display: none;
	}
	&:hover {
		background-color: $color-system-2-dimmed;
	}
	&:active,
	&:focus {
		box-shadow: $shadow-box-focus;
	}
}
</style>
