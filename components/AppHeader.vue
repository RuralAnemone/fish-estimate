<template>
	<div class="flex justify-between h-10">
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
h1 {
	text-align: center;
}
</style>