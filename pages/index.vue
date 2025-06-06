<script setup lang="ts">
	const width = ref(400)
	const height = ref(200)
</script>

<template>
	<EstimateApp>
		<AppHeader title="Hi there!">
			<UButton class="header-button" to="count">click me!!</UButton>
		</AppHeader>
		<ULink to="load">click me :3</ULink>
		<USeparator label="HHHHHHHHHHHH" />
		<UInputNumber placeholder="width" v-model="width" />
		<UInputNumber placeholder="height" v-model="height" />
		<WhitelabelLogo :width :height />
	</EstimateApp>
</template>

<style>
.header-button {
	text-align: center;
}
</style>