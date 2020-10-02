<script context="module" lang="ts">
  export async function preload(page: any, session: any) {
    const res = await this.fetch('/data/football/news');
    const data = await res.json();
    return {
      news: data.items,
    };
  }
</script>

<script lang="ts">
  import DoubleText from "../components/DoubleText.svelte";
  import Option from "../components/Option.svelte";
  
  export let news: any[];

  const getHeadline = (headline: string, ellipsis: boolean = false): string => {
    const maxLength: number = 37;
    const separator: string = ' ';
    if (headline.length <= maxLength) return headline;
      return `${headline.substr(0, headline.lastIndexOf(separator, maxLength))}${ellipsis ? '…' : ''}`;
  }
</script>

<style>
  .option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stats {
    display: flex;
    flex-direction: column;
  }

  .stats > * {
    margin-top: 0.5rem;
  }
</style>

<div class="option">
  <DoubleText text={getHeadline(news[0].title).toUpperCase()} />
  <DoubleText text="304" />
</div>
<div>
  {#each news.slice(1, 8) as headline}
    <Option text={getHeadline(headline.title, true)} color="cyan" pageNumber="306" />
  {/each}
</div>
<hr class="green"/>
<div class="stats">
  <p>FIXTURES</p>
  <Option text="Championship" pageNumber="303" color="cyan" />
  <p>TABLES</p>
  <Option text="Championship" pageNumber="324" color="cyan" />
</div>
