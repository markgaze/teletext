<script lang="ts">
  import dayjs from 'dayjs';
  import { onDestroy } from 'svelte';

  export let pageNumber: number;
  let date: string;
  let time: string;

  const setDateTime = () => {
    date = dayjs().format('ddd DD MMM');
    time = dayjs().format('HH:mm/ss');
  };

  setDateTime();
  const interval = setInterval(setDateTime, 1000);

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
