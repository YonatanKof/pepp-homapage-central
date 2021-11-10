<script setup>
import HomepageCentral from "./components/HomepageCentral.vue";
</script>

<template>
	<HomepageCentral />
	<router-view></router-view>
</template>

<style>
@import "./assets/fonts/Montserrat/montserrat.css";
@import "./assets/fonts/Inter/inter.css";
#app {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;
}
</style>
