<script lang="ts">
	import { DateTime } from 'luxon'
	export default {
		data() {
			return {
				now: DateTime.now().toString()
			}
		},
		mounted() {
			this.updateTime()
		},
		methods: {
			updateTime() {
				this.now = DateTime.now().toString()
				requestAnimationFrame(this.updateTime)
			}
		}
	}
</script>

<template>
	<p>{{ now }}</p>
</template>