<script lang="ts">
	import DoubleText from "../components/DoubleText.svelte";

	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	pre {
		font-size: 0.625rem;
	}

	.error {
		background-color: blue;
		display: grid;
		text-align: center;
		place-content: center;
		height: 100%;
		width: 100%;
	}

	.link {
		margin-top: 2rem;
	}
</style>

<svelte:head>
	<title>Error: {status}</title>
</svelte:head>


<div class="error">
	<DoubleText background="blue" text={`${status}`} />
	<p>{error.message}</p>
	<p class="link">Go back to page <a href="/" class="yellow">100</a></p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
