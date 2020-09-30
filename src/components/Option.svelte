<script lang="ts">
  export let text: string;
  export let pageNumber: string;
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
    <p class="yellow">{text}</p>
    <p>{pageNumber}</p>
  </div>
</a>
