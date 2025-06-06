<script setup>
	const fiveHundred = ref(Array(500))
</script>

<template>
	<EstimateApp>
		<p>load your previous estimates here</p>
		<USeparator v-for="h in fiveHundred" :key="h" icon="i-simple-icons-nuxtdotjs" />
		
	</EstimateApp>
</template>