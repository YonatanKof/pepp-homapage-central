<template>
	<slot :svgFill="svgFill" :svgOpacity="svgOpacity"/>
</template>

<script>
export default {
	props: ["svgFill", "svgOpacity"],
};
</script>