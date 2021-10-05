<script setup>
import Header from "../components/Header.vue";
import Slideshow from "../components/Slideshow.vue";
import Promos from "../components/Promos.vue";
import Portfolio from "../components/Portfolio.vue";
import Footer from "../components/Footer.vue";
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