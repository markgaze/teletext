<script lang="ts">
  import DoubleText from './DoubleText.svelte';  
</script>

<style>
  .header-bar {
    display: flex;
  }

  .logo {
    display: flex;
    flex-direction: column;
  }

  .banner {
    background-color: blue;
    flex-grow: 1;
    /* Hard-coded til the actual banner is implemented */
    height: 43px; 
    margin-left: 0.5rem;
    padding-left: 1rem;
    padding-top: 0.25rem;
  }
</style>

<div class="header-bar">
  <a class="white" href="/100">
    <div class="logo">
      <span>&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;</span>
      <span>&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe207;&#xe22b;</span>
      <span>&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;</span>
    </div>
  </a>
  <div class="banner">
    <DoubleText text="CEEFAX" background="blue" />
  </div>
</div>
