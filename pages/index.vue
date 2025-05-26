<script setup lang="ts">
	const width = ref(400)
	const height = ref(200)
</script>

<template>
	<EstimateApp>
		<ULink to="load">click me :3</ULink>
		<USeparator />
		<UInputNumber placeholder="width" v-model="width" />
		<UInputNumber placeholder="height" v-model="height" />
		<WhitelabelLogo :width :height />
	</EstimateApp>
</template>