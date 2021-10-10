<script setup>
import HomepageCentral from "./components/HomepageCentral.vue";
</script>

<template>
	<HomepageCentral />
	<router-view></router-view>
</template>

<style lang="scss">
@use "./styles/abstracts/" as *;
@use "./styles/components/" as *;
</style>
