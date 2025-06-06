<template>
	<div class="grid-container">
		<div class="grid-item">
			<ULink to="/">
				<UIcon name="logos:nuxt-icon" />
			</ULink>
		</div>
		<div class="grid-item">
			<h1 class="">{{ props.title }}</h1>
		</div>
		<div class="grid-item">
			<slot />
		</div>
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
	height: 4rem;
	grid-template-columns: 10% 1fr 10%;
	align-items: center;
}

h1 {
	text-align: center;
}

// debug:
.grid-container>* {
	border: 1px solid red;
	height: 100%
}
</style>