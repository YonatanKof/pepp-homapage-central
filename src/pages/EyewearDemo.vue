<script setup>
import Header from "../components/demo-eyewear/Header.vue";
import Slideshow from "../components/demo-eyewear/Slideshow.vue";
import Promos from "../components/demo-eyewear/Promos.vue";
import Portfolio from "../components/demo-eyewear/Portfolio.vue";
import Footer from "../components/demo-eyewear/Footer.vue";
</script>

<template>
	<body>
		<Header />
		<main class="wrapper content">
			<Slideshow />
			<Promos />
			<Portfolio />
			<Footer />
		</main>
	</body>
</template>

<style>
/* @import "../assets/fonts/Montserrat/montserrat.css"; */
</style>