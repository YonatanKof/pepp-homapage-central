<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
	<HelloWorld />
	<router-view></router-view>
</template>

<style lang="scss">
@use "./styles/abstracts/" as *;
@use "./styles/components/" as *;
</style>
