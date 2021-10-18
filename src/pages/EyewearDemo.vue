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
				<!-- imageURL="http://storage.pepperi.com/Eyewear/image12.jpg" -->
			<Slideshow
				imageURL="../../public/eyewear-hero-1.jpg"
				slideTitle="Infinite looks"
				slideSubTitle="Amazing Sunglasses At just <strong>$99</strong>"
				buttonText="Shop Now!"
				buttonLink="https://wwape.com/"
			/>
			<Promos />
			<Portfolio />
			<Footer />
		</main>
	</body>
</template>
