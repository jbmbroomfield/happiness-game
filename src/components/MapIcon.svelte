<script>
  import Icon from "./icons/Icon.svelte";

  export let object;
  export let cellSize = 32;

  let style;

  function getStyle(loc, cellSize) {
    if (object.hidden) return "";
    return `left: ${loc[0] * cellSize}px; top: ${loc[1] * cellSize}px`;
  }

  $: style = getStyle(object.location, cellSize);
  $: console.log("hidden?", object.hidden);
</script>

{#if !object.hidden}
  <div class="absolute" {style}>
    <Icon name={object.icon} class={object.color} />
  </div>
{/if}
