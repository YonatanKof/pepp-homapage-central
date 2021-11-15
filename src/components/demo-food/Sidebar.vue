<template>
	<aside id="sidebar">
		<div id="response-menu" class="response-menu">
			<button @click="showSidebar = !showSidebar" class="button-regular title-lg color-system" id="btn">My Lists</button>
		</div>
		<div id="sidebar-sm" :class="compClasses" class="sidebar-sm sidebar-menu">
			<div class="baselist">
				<h3 class="title-sm color-system">My Lists</h3>
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
			<InfoCard
				InfoCardKey="Credit line"
				InfoCardValue="$2,102"
				InfoCardImage="https://storage.pepperi.com/PreSales/NewFoodDemoImg/credit.svg"
			/>
			<InfoCard
				InfoCardKey="Open Invoices"
				InfoCardValue="$-429"
				InfoCardImage="https://storage.pepperi.com/PreSales/NewFoodDemoImg/invoice.svg"
			/>
			<div id="overSide"></div>
		</div>
	</aside>
</template>

<script>
import Option from "./Option.vue";
import InfoCard from "../InfoCard.vue";

export default {
	components: {
		Option,
		InfoCard,
	},
	data() {
		return {
			showSidebar: false,
		};
	},
	computed: {
		compClasses: function () {
			return {
				showSidebar: this.showSidebar,
			};
		},
	},
};
</script>

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
		background: $color-system-invert-1-full;
	}
	#sidebar {
		position: absolute;
		z-index: 1000;
		min-width: 100vw;
		height: 100%;
	}

	.sidebar-sm {
		display: none;
		padding: 0 1.5rem 2rem 1.5rem;
		height: max-content;
		box-shadow: $shadow-box;
		position: relative;
	}
	.response-menu {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 4rem;
		background-color: $color-system-invert-1-full;
		box-shadow: $shadow-box;
		position: relative;
		z-index: 500;
		button {
			width: 100%;
			max-width: 24rem;
			margin: 0.75rem;
		}
	}
	.baselist {
		padding-top: 1.5rem;
		margin-top: 0px;
	}

	#overSide {
		display: block;
		position: fixed;
		inset: 0px;
		top: calc(var(--main-links-height) + var(--header-height));
		background-color: $color-system-2-dimmed;
		z-index: -100;
	}
}

.showSidebar {
	display: flex;
}
</style>
