<script lang="ts">
  import Banner from "../components/Banner.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  export let pageNumber: number = 100;
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
		gap: 0.5rem;
		height: 30rem;
		width: 40rem;
	}
	
	.teletext {
		display: grid;
		height: 100vh;
		place-items: center;
		width: 100vw;
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
