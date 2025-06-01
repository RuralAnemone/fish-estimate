<template>
	<div class="grid-container">
		<ULink to="/">
			<UIcon name="logos:nuxt-icon" />
		</ULink>
		<h1 class="">{{ props.title }}</h1>
		<slot />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string
	}>();
</script>

<style lang="scss" scoped>
div.grid-container {
	display: grid;
	width: 100%;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: center;
}

h1 {
	text-align: center;
}

// debug:
div>* {
	border: 1px solid red;
}
</style>