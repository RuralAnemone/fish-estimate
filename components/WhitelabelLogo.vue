<script setup lang="ts">
const props = defineProps<{
	width: number;
	height: number;
}>();
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${props.width} ${props.height}`" :width="props.width" :height="props.height">
		<defs>
			<linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color: #ff00ff; stop-opacity: 1" />
				<stop offset="50%" style="stop-color: #00ffff; stop-opacity: 1" />
				<stop offset="100%" style="stop-color: #ffff00; stop-opacity: 1" />
			</linearGradient>

			<filter id="softGlow">
				<feGaussianBlur stdDeviation="2" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<path :d="`M${props.width / 8} ${props.height / 2} Q ${props.width / 2} ${props.height / -8} ${(7 * props.width) / 8} ${props.height / 2} T ${props.width / 8} ${props.height / 2}`" fill="none" stroke="url(#rainbow)" stroke-width="8" stroke-linecap="round" filter="url(#softGlow)" />

		<g font-family="Arial, sans-serif" text-anchor="middle">
			<text x="50%" y="45%" font-size="48" font-weight="bold" fill="var(--color-primary)">ACME</text>
			<text x="50%" y="70%" font-size="36" font-weight="bold" fill="var(--color-primary)" transform="skewX(-10)">LLC</text>
		</g>

		<path :d="`M${props.width * 0.5} ${props.height * 0.8} Q ${props.width * 0.525} ${props.height * 0.7} ${props.width * 0.55} ${props.height * 0.8} ${props.width * 0.575} ${props.height * 0.9} ${props.width * 0.6} ${props.height * 0.8}`" stroke="#eee" fill="none" stroke-width="2" stroke-dasharray="4 4" />
	</svg>
</template>
