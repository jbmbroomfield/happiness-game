<script>
  import Icon from "./icons/Icon.svelte";

  export let cellSize = 32;
  export let width = 40;
  export let height = 25;
</script>

<div
  class="map bg-gray-300 absolute"
  style="width: {cellSize * width}px; height: {cellSize * height}px"
>
  <div class="absolute" style="left: 0px; top: 0px">
    <Icon name="apple" class="text-red-400" />
  </div>
  <div class="absolute" style="left: 0px; top: 32px">
    <Icon name="apple" class="text-red-400" />
  </div>
  <div class="absolute" style="left: 32px; top: 0px">
    <Icon name="apple" class="text-red-400" />
  </div>
  <div class="absolute" style="left: 32px; top: 32px">
    <Icon name="apple" class="text-red-400" />
  </div>
</div>
