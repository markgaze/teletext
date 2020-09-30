<script lang="ts">
  export let text: string;
  export let foreground: string = 'white';
  export let background: string = 'black';
  export let extraClasses: string = '';

  let lines: string[] = ['', ''];

  for (var i: number = 0; i < text.length; i++) {
    var val = text[i].charCodeAt(0);
    lines[0] += String.fromCharCode(val + 0xE000);
    lines[1] += String.fromCharCode(val + 0xE100);
  }
</script>

<style>
  .doubleText {
    display: flex;
    flex-direction: column;
  }
</style>

<div class={`doubleText ${extraClasses}`}>
  <span class={`${foreground} ${background}bg`}>
    {lines[0]}
  </span>
  <span class={`${foreground} ${background}bg`}>
    {lines[1]}
  </span>
</div>
