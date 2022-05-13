<script>
  import Icon from "./icons/Icon.svelte";

  export let object;
  export let cellSize = 32;

  let style;

  function getStyle(loc, cellSize) {
    return `left: ${loc[0] * cellSize}px; top: ${loc[1] * cellSize}px`;
  }

  $: style = getStyle(object.location, cellSize);
</script>

<div class="absolute" {style}>
  <Icon name={object.icon} class={object.color} />
</div>
