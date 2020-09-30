<script lang="ts">
  import Banner from "../components/Banner.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

	export let segment: string;
	$: console.log(segment);
  let pageNumber: number = 100;
</script>

<style>
	.teletext {
		height: 100vh;
		width: 100vw;
	}
	
	.page {
    display: flex;
    flex-direction: column;
		gap: 0.5rem;
		margin: auto;
		min-height: 30rem;
		width: 40rem;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 25rem;
	}
</style>

<div class="teletext">
	<div class="page">
		<Header pageNumber={pageNumber}/>
		<Banner />
		<main>
			<slot></slot>
		</main>
		<Footer />
	</div>
</div>
