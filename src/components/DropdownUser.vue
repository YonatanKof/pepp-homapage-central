<template>
	<div id="user-dd" class="dropdown">
		<ButtonIcon v-click-outside="hideUserMenu" @click="isShowUserData = !isShowUserData">
			<IconAvatar />
		</ButtonIcon>
		<div v-if="isShowUserData" class="dropdown-content-end" id="myDropdown">
			<ul>
				<p class="dimmed">User Name</p>
				<hr />
				<li onclick="customHeader.changePassword()">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								d="M21,20 C21.5522847,20 22,20.4477153 22,21 C22,21.5522847 21.5522847,22 21,22 L3,22 C2.44771525,22 2,21.5522847 2,21 C2,20.4477153 2.44771525,20 3,20 L21,20 Z M14.2071068,2.79289322 L18.2071068,6.79289322 C18.5976311,7.18341751 18.5976311,7.81658249 18.2071068,8.20710678 L9.70710678,16.7071068 C9.59733192,16.8168816 9.4635062,16.8995905 9.31622777,16.9486833 L3.31622777,18.9486833 C2.53446974,19.2092693 1.79073069,18.4655303 2.0513167,17.6837722 L4.0513167,11.6837722 C4.10040951,11.5364938 4.18311836,11.4026681 4.29289322,11.2928932 L12.7928932,2.79289322 C13.1834175,2.40236893 13.8165825,2.40236893 14.2071068,2.79289322 Z M10.9992709,7.414 L5.87403205,12.5401815 L4.58113883,16.4188612 L8.45981849,15.125968 L13.5852709,10 L10.9992709,7.414 Z M13.5,4.91421356 L12.4142709,6 L14.9992709,8.585 L16.0857864,7.5 L13.5,4.91421356 Z"
							/>
						</svg>
						Change Password
					</span>
				</li>
				<li onclick="customHeader.logout();">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								d="M19,16.7002538 C19,17.4906313 18.534533,18.2068742 17.8122769,18.5278769 L10.7030692,21.6875248 C10.4507271,21.7996768 10.1552463,21.6860303 10.0430942,21.4336882 C10.0146811,21.3697587 10,21.3005782 10,21.230619 L10,10.2997462 C10,9.50936875 10.465467,8.79312576 11.1877231,8.47212308 L16.767,5.992 L7,5.95898437 L7,17 C7,17.5522847 6.55228475,18 6,18 C5.44771525,18 5,17.5522847 5,17 L5,5 C5,4.44771525 5.44771525,4 6,4 L18,4 C18.5522847,4 19,4.44771525 19,5 L19,16.7002538 Z"
							/>
						</svg>
						Logout
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
import ButtonIcon from "./ButtonIcon.vue";
import IconAvatar from "./icons/IconAvatar.vue";

export default {
	name: "ToggleDiv",
	components: {
		ButtonIcon,
		IconAvatar,
	},
	directives: {
		clickOutside: vClickOutside.directive,
	},
	data() {
		return {
			isShowUserData: false,
		};
	},
	props: {
		msg: String,
	},
	methods: {
		hideUserMenu() {
			this.isShowUserData = false;
		},
		onClickOutside(event) {
			return this.hideUserMenu(event);
		},
	},
};
</script>
