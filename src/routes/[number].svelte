<script context="module" lang="ts">
  import Home from '../components/pages/Home.svelte';

  let location: "home" | "error";

  export async function preload(page: any, session: any) {
    const { number } = page.params;
    switch (number) {
      case "100":
        location = "home";
        break;
      default:
        this.error(404, "Page not found");
        break;
    }
  }
</script>

{#if location === "home"}
  <Home />
{/if}
