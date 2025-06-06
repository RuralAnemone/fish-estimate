<template>
	<div class="estimate-app border rounded">
		<slot />
	</div>
</template>

<style>
	div.estimate-app {
		margin-top: 3vh;
		margin-bottom: 3vh;
		margin-left: 3vw;
		margin-right: 3vw;

		padding-top: 2vh;
		padding-bottom: 2vh;
		padding-left: 2vw;
		padding-right: 2vw;

		/* derived from margin values; 94=100-(3+3) */
		height: calc(100vh - (3vh + 3vh));
}
</style>