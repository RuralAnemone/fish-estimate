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
			<UButton trailing-icon="i-lucide-chevron-right" variant="outline" color="neutral" to="load" class="load-button">see my previous estimates</UButton>
		</div>

	</EstimateApp>
</template>

<style>

h2 {
	font-size: large;
}

</style>