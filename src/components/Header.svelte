<script lang="ts">
  import dayjs from 'dayjs';
  import { onDestroy } from 'svelte';

  export let pageNumber: number;
  let date: string;
  let time: string;

  const setDateTime = () => {
    date = dayjs().format('ddd DD MMM');
    time = dayjs().format('hh:mm/ss');
  };

  setDateTime();
  const interval = setInterval(setDateTime, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<style>
  .header {
    display: flex;
    justify-content: space-around;
  }
</style>

<div class="header">
  <span class="white">P{pageNumber}</span>
  <span class="white">CEEFAX 1</span>
  <span class="white">{pageNumber}</span>
  <span class="white">{date}</span>
  <span class="yellow">{time}</span>
</div>
