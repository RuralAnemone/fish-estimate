<template>
	<div class="grid-container">
		<div class="grid-item header-logo-container">
			<ULink class="header-logo-link" to="/estimate">
				<UIcon class="header-logo-icon" name="logos:nuxt-icon" />
			</ULink>
		</div>
		<div class="grid-item">
			<h1 class="header-main-text">{{ props.title }}</h1>
		</div>
		<div class="grid-item header-third-item">
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
$header-height: 4rem;

div.grid-container {
	display: grid;
	width: 100%;
	height: $header-height;
	grid-template-columns: 10% 1fr 10%;
	align-items: center;
}

.grid-container * {
	height: 100%
}

.header-logo-container {
	justify-self: left;
	width: 100%;
	height: 100%;
}

.header-third-item {
	justify-self: right;
}

.header-logo-link {
	width: 100%;
	height: 100%;
}

.header-logo-icon {
	display: block;
	width: $header-height;
	height: 100%;
}

.header-main-text {
	text-align: center;
	font-size: 32pt;
	font-weight: bold;
}

.header-third-item > * {
	width: 100%;
	height: 100%;
}

// debug:
// .grid-container * {
// 	border: 1px solid red;
// }
</style>