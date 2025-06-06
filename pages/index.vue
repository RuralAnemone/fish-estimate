<script setup lang="ts">
import CurrentTime from '~/components/CurrentTime.vue';

	// const width = ref(400)
	// const height = ref(200)
</script>

<template>
	<EstimateApp>
		<AppHeader title="Hi there!" :separator-props="{label: 'HHHHHHHH'}" >
			<CurrentTime />
		</AppHeader>

		<div class="content">
			<h2>Which estimate type?</h2>
			<div class="estimate-buttons">
				<UButton to="count?type=residential" class="estimate-button">Residential</UButton>
				<UButton to="count?type=commercial" class="estimate-button">Commercial</UButton>
			</div>
			<div class="load-button-container">
				<UButton trailing-icon="i-lucide-chevron-right" variant="outline" color="neutral" to="load" class="load-button">see my previous estimates</UButton>
			</div>
		</div>

	</EstimateApp>
</template>

<style lang="scss">

.content {
	display: grid;
	height: 80%;
	grid-template-rows: 1fr 1fr 2fr;
	justify-items: center;
	align-items: center;
}

h2 {
	font-size: 2rem;
	align-self: flex-end;
}

.estimate-buttons {
	display: flex;
	column-gap: 1ex;
}

.load-button,
.estimate-buttons > * {
	font-size: 1rem; // how in the world does this make it bigger
}

.load-button-container {
	align-self: start;
}


</style>