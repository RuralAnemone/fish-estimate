<script setup lang="ts">
const route = useRoute()
let estimateType = ref(route.query.type ?? '')

watch(route, value => {
	estimateType = ref(value.query.type ?? '')
})
</script>

<template>
	<EstimateApp>
		<AppHeader title="Count!">
			<CurrentTime />
		</AppHeader>
		<p>you selected {{ estimateType }} estimate</p>
	</EstimateApp>
</template>