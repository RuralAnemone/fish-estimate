<script setup lang="ts">
const props = defineProps<{
	width: number;
	height: number;
}>();
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${props.width} ${props.height}`" :width="props.width" :height="props.height">
		<defs>
			<filter id="softGlow">
				<feGaussianBlur stdDeviation="2" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<path :d="`M${props.width / 8} ${props.height / 2} Q ${props.width / 2} ${props.height / -8} ${(7 * props.width) / 8} ${props.height / 2} T ${props.width / 8} ${props.height / 2}`" fill="none" stroke="var(--ui-primary)" stroke-width="8" stroke-linecap="round" filter="url(#softGlow)" />
	</svg>
</template>
