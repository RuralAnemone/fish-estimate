<script lang="ts">
	export default {
		data() {
			return {
				now: new Date().toISOString()
			}
		},
		mounted() {
			this.updateTime()
		},
		methods: {
			updateTime() {
				this.now = new Date().toISOString()
				requestAnimationFrame(this.updateTime)
			}
		}
	}
</script>

<template>
	<p>{{ now }}</p>
</template>