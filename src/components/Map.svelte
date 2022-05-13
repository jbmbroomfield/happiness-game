<script>
  import MapObject from "../javascript/MapObject.js";
  import MapIcon from "./MapIcon.svelte";

  export let cellSize = 32;
  export let width = 40;
  export let height = 25;

  let objects = MapObject.all;
</script>

<div
  class="rounded bg-gray-200 absolute"
  style="width: {cellSize * width}px; height: {cellSize * height}px"
>
  {#each objects as object}
    <MapIcon {object} />
  {/each}
</div>
