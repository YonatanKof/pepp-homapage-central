<template>
	<footer>
		MyBrand &#169; {{ $data.year }}
	</footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
}
</script>
