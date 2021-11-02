<script setup>
import Option from "./Option.vue";
</script>
<template>
	<aside id="sidebar">
		<div id="response-menu" class="response-menu">
			<button onclick="customHomepage.openCloseMenu();" class="dropbtn" id="btn">Open menu</button>
		</div>
		<div id="sidebar-sm" class="sidebar-menu">
			<div class="baselist">
				<h3 class="title-2-sm">My Lists</h3>
				<hr />
				<div id="food_list" style="display: block">
					<div id="popup" style="display: none">
						<div id="overlay1"></div>
						<div id="content" onclick="customHomepage.togglePopup()">
							<h1>Success!</h1>
							<hr />
							<p id="modal-text">Items from selected list were successfully added to the cart!</p>
							<hr />
						</div>
					</div>
					<div class="baselist__options">
						<Option Title="Meat" clickTo="customHomepage.getUDTLists(document.getElementById('list1').innerHTML)" />
						<Option Title="Dairy" clickTo="customHomepage.getUDTLists(document.getElementById('list2').innerHTML)" />
						<Option
							Title="Dry Products"
							clickTo="customHomepage.getUDTLists(document.getElementById('list3').innerHTML)"
						/>
					</div>
				</div>

				<button class="button-regular" id="transactionTotal1" onclick="customHomepage.NavigateToActiveCart()">
					<p id="qty1" class="body-2xs">
						<strong>20</strong>
					</p>
					Go to cart
				</button>
			</div>
			<hr />

			<button class="button-strong" onclick="customHomepage.createNewReplenishment()">Replenishment</button>

			<hr />

			<div class="card">
				<div>
					<p>Credit line</p>
					<p id="credit-line" class="bigger">$2,102</p>
				</div>
				<img src="https://storage.pepperi.com/PreSales/NewFoodDemoImg/credit.svg" />
			</div>

			<div class="card" onclick="customHomepage.createNewActivityAging()">
				<div>
					<p>Open Invoices</p>
					<p id="balance-line" class="bigger">$-2,102</p>
				</div>
				<img src="https://storage.pepperi.com/PreSales/NewFoodDemoImg/invoice.svg" />
			</div>
			<div id="overSide"></div>
		</div>
	</aside>
</template>

<style lang="scss">
.sidebar-menu {
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 0.75rem;
}
.response-menu {
	display: none;
}

#overSide {
	display: none;
}

.card {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.06);
	color: $color-primary;
	border-radius: 4px;
	padding: 14px 16px;

	.bigger {
		opacity: 1;
		font-weight: 600;
		font-size: var(--font-size-03);
	}
	img {
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
.baselist {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	&__options {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
}

#qty1 {
	position: absolute;
	z-index: 200;
	background-color: $color-success;
	color: #ffff;
	border-radius: 1em;
	padding: 0.25em 0.7em;
	top: -0.75em;
	right: -0.75em;
	box-shadow: $shadow-box-soft;
}

@media screen and (max-width: $screen-md) {
	.sidebar-menu {
		background: white;
	}
	#sidebar {
		position: absolute;
		z-index: 1000;
		min-width: 100vw;
		height: 100%;
	}

	#sidebar-sm {
		display: none;
		padding: 0 48px 64px 48px;
		height: max-content;
		box-shadow: $shadow-box;
		position: relative;
	}
	.response-menu {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 64px;
		background-color: white;
		box-shadow: $shadow-box;
		position: relative;
		z-index: 500;
		button {
			font-size: var(--font-size-01);
			font-weight: 600;
			background: rgb(250, 250, 250);
			border-radius: 4px;
			border: 1px solid rgb(153, 153, 153);
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
			height: 40px;
			color: #000;
			padding: 7px 80px;
			margin-top: 12px;
		}
	}
	.baselist {
		padding-top: 24px;
		margin-top: 0px;
	}

	.balance {
		margin-bottom: 48px;
	}

	#overSide {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100vw;
		height: 100vh;
		display: block;
		left: 0;
		z-index: -100;
	}
	#add {
		width: 32px;
		height: 32px;
	}
}
@media screen and (max-width: $screen-sm) {
	#sidebar-sm {
		padding: 0 32px 48px 32px;
	}
}
</style>
