<template>
	<header class="header food-header">
		<div class="header-start">
			<router-link class="logo" to="/food-demo">
				<img src="FoodDemo/Foodies.svg" />
			</router-link>
		</div>
		<div class="header-end">
			<div class="left-mobile">
				<div class="dropdown showMobile">
					<button
						class="dropdown"
						type="button"
						id="dropdownMenuButton"
						onclick="customHeader.closeHumanMenu()"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<img src="https://storage.pepperi.com/General/Icons/open-menu-white.svg" alt="user" />
					</button>

					<div id="dropdown-menu-mobile" class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
						<div id="test-drpd">
							<div id="userMenuMobile" class="additional_menu">
								<div class="dropdown-user">
									<button
										class="right-buttons img-pos"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<svg class="user-img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 3 20 20">
											<path
												fill-opacity="1"
												fill-rule="evenodd"
												fill="white"
												d="M5.87300934,20 C5.31672677,18.8352719 5,17.5623379 5,16.3333333 C5,13.9259827 6.21522434,12.2548428 8.06569509,11.3364984 C7.70530908,10.3928205 7.5,9.36966701 7.5,8.4 C7.5,5.36243388 9.51471863,4 12,4 C14.4852814,4 16.5,5.36243388 16.5,8.4 C16.5,9.36966701 16.2946909,10.3928205 15.9343049,11.3364984 C17.7847757,12.2548428 19,13.9259827 19,16.3333333 C19,17.5623379 18.6832732,18.8352719 18.1269907,20 C17.7963837,20 17.3817618,20 16.883125,20 C15.7220834,20 15.7220834,19.3712729 15.8841722,19.0335104 C16.2755898,18.2178696 16.5,17.329449 16.5,16.5 C16.5,15.0183086 15.7838916,14.0593118 14.6788931,13.5264125 C13.9304475,14.4190907 13.00359,15 12,15 C10.99641,15 10.0695525,14.4190907 9.32110687,13.5264125 C8.21610842,14.0593118 7.5,15.0183086 7.5,16.5 C7.5,17.3265901 7.72286593,18.211746 8.11178644,19.0250739 C8.2747433,19.3658565 8.2747433,20 7.14578125,20 C6.64072083,20 6.21646352,20 5.87300934,20 Z M12,12.5 C13.1045695,12.5 14,10.2997114 14,8.64285714 C14,6.98600289 13.1045695,6.5 12,6.5 C10.8954305,6.5 10,6.98600289 10,8.64285714 C10,10.2997114 10.8954305,12.5 12,12.5 Z"
											/>
										</svg>
										<p id="userName"></p>
									</button>
									<hr />
									<div class="dropdown-content-user">
										<ul>
											<li id="userName"></li>

											<li onclick="customHeader.changePassword()">Change Password</li>
											<li onclick="customHeader.logout();">Logout</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="btn-group">
					<ul id="header_btn_bar" class="showDesktop" style="list-style: none"></ul>
				</div>
			</div>
			<div class="d-flex justify-content-right">
				<div id="right_additional_menu">
					<div class="dropdown">
						<button onclick="customHeader.closeHamburgerMenu()" class="right-buttons img-pos" id="user-drop">
							<svg class="user-img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 3 20 20">
								<path
									fill-opacity="1"
									fill-rule="evenodd"
									fill="white"
									d="M5.87300934,20 C5.31672677,18.8352719 5,17.5623379 5,16.3333333 C5,13.9259827 6.21522434,12.2548428 8.06569509,11.3364984 C7.70530908,10.3928205 7.5,9.36966701 7.5,8.4 C7.5,5.36243388 9.51471863,4 12,4 C14.4852814,4 16.5,5.36243388 16.5,8.4 C16.5,9.36966701 16.2946909,10.3928205 15.9343049,11.3364984 C17.7847757,12.2548428 19,13.9259827 19,16.3333333 C19,17.5623379 18.6832732,18.8352719 18.1269907,20 C17.7963837,20 17.3817618,20 16.883125,20 C15.7220834,20 15.7220834,19.3712729 15.8841722,19.0335104 C16.2755898,18.2178696 16.5,17.329449 16.5,16.5 C16.5,15.0183086 15.7838916,14.0593118 14.6788931,13.5264125 C13.9304475,14.4190907 13.00359,15 12,15 C10.99641,15 10.0695525,14.4190907 9.32110687,13.5264125 C8.21610842,14.0593118 7.5,15.0183086 7.5,16.5 C7.5,17.3265901 7.72286593,18.211746 8.11178644,19.0250739 C8.2747433,19.3658565 8.2747433,20 7.14578125,20 C6.64072083,20 6.21646352,20 5.87300934,20 Z M12,12.5 C13.1045695,12.5 14,10.2997114 14,8.64285714 C14,6.98600289 13.1045695,6.5 12,6.5 C10.8954305,6.5 10,6.98600289 10,8.64285714 C10,10.2997114 10.8954305,12.5 12,12.5 Z"
								/>
							</svg>
						</button>
						<div id="myDropdown" class="dropdown-content">
							<ul>
								<li id="userName1"></li>
								<hr style="margin-top: 14px; margin-bottom: 14px" />
								<li class="icon-pas" onclick="customHeader.changePassword()">Change Password</li>
								<li class="icon-log" onclick="customHeader.logout();">Logout</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
$food-color-main: rgb(48, 37, 29);

.food-header {
	// height: $header-height;
	// display: flex;
	// align-items: center;
	background-color: $food-color-main;
	box-shadow: $shadow-box-hard;
}

#header_btn_bar {
	display: flex;
}

#header-section .dropdown-menu:after {
	display: none;
}

#header-section .justify-content-left {
	display: flex;
	justify-content: flex-end;
	width: 100% !important;
	height: 64px;
	align-items: center;
	padding-right: 20px;
}

#header-section .left-mobile {
	height: 40px;
	color: #fff;
	display: flex;
	margin-right: 32px;
	font-size: 20px;
}

#header-section .btn-group ul {
	align-items: center;
	padding: 0;
	top: 13px;
}

#header-section .btn-group ul li {
	display: inline;
	padding-top: 5px;
	padding-left: 15px;
	padding-right: 5px;
	border-radius: 4px;
	height: 40px;
}

#header-section .btn-group ul li a {
	text-decoration: none;
}

.additional_menu {
	margin-right: 15px;
	display: flex;
	justify-content: space-between;
}

.right-buttons {
	background: rgb(19, 12, 6);
	width: 40px;
	height: 40px;
	border: 1px solid rgb(26, 26, 26);
	border-radius: 4px;
	font-weight: 500;
	font-size: 14px;
	color: rgb(80, 80, 80);
	line-height: 5px;
}

.btn-group ul li a {
	color: white;
	font-family: "Inter", sans-serif;
	font-size: 14px;
	height: 20px;
	letter-spacing: 0.12px;
	line-height: 20px;
	border: none;
	transform: scale(1, 0.9);
}

.btn-group ul li a:hover {
	cursor: pointer;
}

.btn-group .wishlist {
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;
	font-size: 20px;
}

#header-section .container-fluid {
	width: 100%;
	display: flex;
	background: rgb(48, 37, 29);
	align-items: center;
	max-width: 1464px;
	padding-left: 0px;
	padding-right: 0px;
}

#header-section .btn-group {
	display: flex;
}

#header-section .btn-group button {
	outline: none;
	background-color: black;
	border: none;
	border-radius: 5px;
	color: #a29696;
	height: 40px;
	line-height: 20px;
	padding: 0 15px;
	margin-left: 10px;
}

#header-section .dropdown {
	height: 40px;
}

#header-section .dropdown .dropdown-log-in:hover {
	background-color: #a29696;
	color: #8b7e7e;
}

#header-section .dropdown .dropdown-log-in {
	background-color: transparent;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	border: 2px solid #8b7e7e;
	border-radius: 300px;
	color: white;
	font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 750;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-decoration: none;

	transition: background-color 0.2s ease-out, color 0.2s ease-out;
	-webkit-transition: background-color 0.2s ease-out, color 0.2s ease-out;
	-moz-transition: background-color 0.2s ease-out, color 0.2s ease-out;
	-o-transition: background-color 0.2s ease-out, color 0.2s ease-out;
}

#header-section .dropdown a {
	text-decoration: none;
	cursor: pointer;
	display: block;
	font-size: 10px;
}

#header-section .dropdown a:hover {
	//background: #8b7e7e;
	color: white;
}

#header-section .dropdown-menu:before {
	border: none !important;
}

#header-section .dropdown-menu {
	width: 304px;
	padding-left: 21px;

	text-align: center;
}

#header-section .favorite {
	position: relative;
	width: 118px;
}

.showMobile {
	display: none;
}

.dropdown-user .dropdown-content-user li {
	list-style-type: none;
}

.dropdown-user {
	position: relative;
	width: fit-content;
}

.dropdown-content-user {
	display: none;
	position: absolute;
	font-size: 14px;
	vertical-align: middle;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px 16px;
	z-index: 1;
	right: 0px;
	border-radius: 4px;
}

.dropdown-content {
	display: none;
	font-size: 14px;
	vertical-align: middle;
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 14px 8px;
	z-index: 1;
	right: 0px;
	border: 1px solid gray;
	border-radius: 4px;
	top: 40px;
	padding-bottom: 0px;
}

.dropdown-content ul {
	list-style: none;
	padding: 0 10px;
	margin: 0;
}

.dropdown-content ul li {
	height: 40px;
	padding-top: 5px;
	cursor: pointer;

	color: rgb(26, 26, 26);
	font-size: 14px;
	font-weight: normal;
	letter-spacing: 0.12px;
	line-height: 13px;
	margin-bottom: 0px;
}

#userMenuMobile {
	display: none;
	margin-bottom: 20px;
	padding-bottom: 20px;
	margin-left: 10px;
	width: 45vw;
}

#userName {
	margin: 0 0 0px 10px;
	color: white;
}
#userName1 {
	width: 131px;
	height: 18px;
	color: rgba(26, 26, 26, 0.7);
	font-size: 14px;
	font-weight: normal;
	letter-spacing: 0.12px;
	line-height: 9px;
}

@media (max-width: 768px) {
	.dotted {
		display: none;
	}
	.show {
		display: block;
	}

	.open > .dropdown-menu {
		display: flex;
	}

	#userMenuMobile {
		display: block;
	}

	#right_additional_menu {
		display: block;
		width: 40px;
		height: 40px;
	}

	#header-section #dropdownMenuButton {
		height: 40px;
		margin-right: 4px;
	}

	#header-section .dropdown a:hover {
		color: black;
	}

	.container-fluid {
		width: 100%;
		display: flex;
		align-items: center;
		background-color: rgb(41, 41, 41);
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 8px 16px 0px rgba(21, 24, 26, 0.1),
			0px 16px 32px 0px rgba(0, 0, 0, 0.1);
		height: 64px;
		padding-left: 0 !important;
	}

	.dropdown-user {
		position: relative;
		width: fit-content;
	}

	.dropdown-content-user {
		display: none;
		position: absolute;
		font-size: 14px;
		vertical-align: middle;
		min-width: 200px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		z-index: 1;
		right: 0px;
		border-radius: 4px;
	}

	.right-buttons {
		background: rgb(19, 12, 6);
		width: 40px;
		height: 40px;
		border: 1px solid rgb(26, 26, 26);
		border-radius: 4px;
		font-weight: 500;
		font-size: 14px;
		color: rgb(80, 80, 80);
		line-height: 5px;
	}

	.back {
		background-color: blue;
		width: 20%;
		height: 20%;
	}
	#header-section .left-mobile {
		height: 40px;

		color: #fff;
		display: flex;
		margin-right: 0px;
		font-size: 20px;
	}
	#header-section .dropdown-menu-left {
		margin-top: 14px;
		font-size: 25px;
		width: 100vw;
		background-color: rgb(41, 41, 41);
		border: none;
		height: 100vh;
		min-width: 200px;
		padding-left: 0px;
	}

	#header-section .dropdown-menu-left li {
		text-align: left;
		height: 40px;
		min-width: 150px;
		color: rgb(26, 26, 26);
		font-size: 14px;
		letter-spacing: 0.12px;
		line-height: 20px;
	}
	// #header-section .dropdown-menu-left li: hover{
	//     background-color: transparent !important;
	// }

	.dropdown-menu li:hover {
		background-color: transparent !important;
	}

	#header-section .dropdown-menu-left li a {
		color: black;
		font-size: 14px;
	}

	.showMobile {
		display: block;
	}
	#dropdownMenuButton:hover #test-drpd {
		display: block;
	}
	.showDesktop,
	#header-section .btn-group ul {
		display: none;
	}
	#userMenuMobile {
		display: none;
	}
}

.icon-pas::before {
	content: "";
	display: inline-block;
	background-size: 20px !important;
	background: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/system-edit.svg) no-repeat;
	width: 20px;
	height: 20px;
	float: left;
	margin: -5px 8px 0 0;
}

.icon-log::before {
	content: "";
	display: inline-block;
	background-size: 20px !important;
	background: url(https://storage.pepperi.com/PreSales/NewFoodDemoImg/system-door.svg) no-repeat;
	width: 20px;
	height: 20px;
	float: left;
	margin: -5px 8px 0 0;
}
</style>
