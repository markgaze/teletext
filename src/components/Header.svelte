<script lang="ts">
  import dayjs from 'dayjs';
  import { onDestroy } from 'svelte';

  export let pageNumber: number;
  let day: dayjs.Dayjs = dayjs();
  let date: string;
  let time: string;

  $: date = day.format('ddd DD MMM');
  $: time = day.format('HH:mm/ss');

  const interval = setInterval(() => day = dayjs(), 1000);

  onDestroy(() => clearInterval(interval));
</script>

<style>
  header {
    display: flex;
    justify-content: space-around;
  }
</style>

<header>
  <span class="white">P{pageNumber}</span>
  <span class="white">CEEFAX 1</span>
  <span class="white">{pageNumber}</span>
  <span class="white">{date}</span>
  <span class="yellow">{time}</span>
</header>
