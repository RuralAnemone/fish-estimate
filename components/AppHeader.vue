<template>
	<div class="header-container">
		<div class="grid-container">
			<div class="grid-item header-logo-container">
				<ULink class="header-logo-link" to="/">
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
		<USeparator :label="props.separatorProps?.label" :icon="props.separatorProps?.icon" />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string
		separatorProps?: {
			label?: string
			icon?: string
		}
	}>();
</script>

<style lang="scss" scoped>
$header-height: 8rem;

div.header-container {
	width: 100%;
	height: $header-height;
}

div.grid-container {
	display: grid;
	width: 100%;
	height: calc($header-height / 2);
	margin-bottom: calc($header-height / 4);
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

.header-third-item > * {
	max-width: 150%;
	overflow-wrap: break-word;
}

.header-logo-link {
	width: 100%;
	height: 100%;
}

.header-logo-icon {
	display: block;
	width: calc($header-height / 2); // change this if you're using a wordmark
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

/* medias! */

// tablet-ish. also works ok for mobile.
@media only screen and (max-width: 900px) {
	div.header-container {
		height: calc($header-height / 2);
	}

	div.grid-container {
		height: calc($header-height / 4);
		margin-bottom: calc($header-height / 8);
	}

	.header-logo-icon {
		width: calc($header-height / 4);
	}

	.header-main-text {
		font-size: calc($header-height / 4);
	}
}

// debug:
// .grid-container * {
// 	border: 1px solid red;
// }
</style>