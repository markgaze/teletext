<script lang="ts">
  export let color: string = "yellow";
  export let pageNumber: string;
  export let text: string;
</script>

<style>
  .option {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1px;
  }
</style>

<a class="white" href={`/${pageNumber}`}>
  <div class="option">
    <p class={color}>{text}</p>
    <p>{pageNumber}</p>
  </div>
</a>
