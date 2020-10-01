<script>
  import League from "../components/pages/League.svelte";
  import Home from '../components/pages/Home.svelte';
</script>

<script context="module" lang="ts">
  let location: "home" | "table" | "error";

  export async function preload(page: any) {
    const { number } = page.params;
    switch (number) {
      case "100":
        location = "home";
        break;
      case "324":
        location = "table";
        break;
      default:
        this.error(404, "Page not found");
        break;
    }
  }
</script>

{#if location === "home"}
  <Home />
{:else if location === "table"}
  <League />
{/if}
