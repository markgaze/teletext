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
</style>

<svelte:head>
	<title>Error: {status}</title>
</svelte:head>


<div className="error">
	<DoubleText text={`${status}`} />
	<p className="link">Go back to page <a href="/" className="yellow">100</a></p>
	{#if dev && error.stack}
		<p>{error.message}</p>
		<pre>{error.stack}</pre>
	{/if}
</div>
