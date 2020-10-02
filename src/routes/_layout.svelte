<script lang="ts">
  import Banner from "../components/Banner.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

	import { stores } from '@sapper/app';
	const { page } = stores();
	let pageNumber: number = 100;

	$: pageNumber = +($page.path.replace('/', ''));
</script>

<style>
	.teletext {
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
