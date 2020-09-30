<script lang="ts">
	import Header from "../components/Header.svelte";
	import Banner from "../components/Banner.svelte";
</script>

<style>
</style>

<svelte:head>
	<title>Teletext</title>
</svelte:head>

<div class="teletext">
	<Header pageNumber={100}/>
	<Banner />
</div>
